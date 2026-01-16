const adminService = require('../services/admin.service');

const getAllOrders = async (req, res) => {
  const orders = await adminService.getAllOrders();
  res.json(orders);
};

const getOrderById = async (req, res) => {
  const order = await adminService.getOrderById(req.params.orderId);
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
};

const updateOrderStatus = async (req, res) => {
  try {
    const order = await adminService.updateOrderStatus(
      req.params.orderId,
      req.body.status
    );
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    await adminService.deleteOrder(req.params.orderId);
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllUsers = async (req, res) => {
  const users = await adminService.getAllUsers();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await adminService.getUserById(req.params.userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

const updateUserRole = async (req, res) => {
  const user = await adminService.updateUserRole(
    req.params.userId,
    req.body.role
  );
  res.json(user);
};

const deleteUser = async (req, res) => {
  await adminService.deleteUser(req.params.userId);
  res.json({ message: 'User deleted' });
};

module.exports = {
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser
};
