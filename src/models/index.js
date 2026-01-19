const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

const User = require('./user.model')(sequelize, DataTypes);
const Order = require('./order.model')(sequelize, DataTypes);

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  Order
};
