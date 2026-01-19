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

const getAllUsers = async () => {
  return User.findAll();
};

const getUserById = async (userId) => {
  return User.findByPk(userId);
};

const updateUserRole = async (userId, role) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('User not found');
  }
  return user.update({ role });
};

const deleteUser = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('User not found');
  }
  return user.destroy();
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
