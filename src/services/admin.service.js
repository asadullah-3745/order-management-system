const { Order, User } = require('../models');

const getAllOrders = async () => {
  return Order.findAll({
    include: [User]
  });
};

const getOrderById = async (orderId) => {
  return Order.findByPk(orderId, {
    include: [User]
  });
};

const updateOrderStatus = async (orderId, status) => {
  const order = await Order.findByPk(orderId);
  if (!order) {
    throw new Error('Order not found');
  }
  return order.update({ status });
};

const deleteOrder = async (orderId) => {
  const order = await Order.findByPk(orderId);
  if (!order) {
    throw new Error('Order not found');
  }
  return order.destroy();
};

module.exports = {
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder
};
