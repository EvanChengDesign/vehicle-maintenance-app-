'use strict';

const vehicleModel = (sequelize, DataTypes) => sequelize.define('Vehicle', {
  make: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1886 
    }
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.ENUM,
    values: ['sedan', 'truck', 'van', 'minivan', 'hybrid'],
    allowNull: false
  }
});

module.exports = vehicleModel;