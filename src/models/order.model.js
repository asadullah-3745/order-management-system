'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED'),
      defaultValue: 'PENDING'
    }
  }, {});

  Order.associate = function(models) {
    Order.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Order;
};