'use strict';

const maintenanceModel = (sequelize, DataTypes) => sequelize.define('Maintenance', {
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,

  },
  mechanicID: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
 
});

module.exports = maintenanceModel;