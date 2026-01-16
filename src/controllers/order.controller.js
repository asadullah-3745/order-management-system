const orderService = require('../services/order.service');

const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder({
      userId: req.user.id,
      role: req.user.role,
      totalAmount: req.body.totalAmount
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

const getMyOrders = async (req, res) => {
  const orders = await orderService.getMyOrders(req.user.id);
  res.json(orders);
};

const getMyOrderById = async (req, res) => {
  const order = await orderService.getMyOrderById(
    req.user.id,
    req.params.orderId
  );

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  res.json(order);
};

module.exports = {
  createOrder,
  getMyOrders,
  getMyOrderById
};
