const { Order } = require('../models');

const createOrder = async ({ userId, role, totalAmount }) => {
  if (role !== 'CUSTOMER') {
    throw new Error('ADMIN_CANNOT_CREATE_ORDER');
  }

  return Order.create({
    userId,
    totalAmount
  });
};

const getMyOrders = async (userId) => {
  return Order.findAll({
    where: { userId }
  });
};

const getMyOrderById = async (userId, orderId) => {
  return Order.findOne({
    where: { id: orderId, userId }
  });
};

module.exports = {
  createOrder,
  getMyOrders,
  getMyOrderById
};
