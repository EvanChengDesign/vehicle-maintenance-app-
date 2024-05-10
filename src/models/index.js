'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const vehicleModel = require('./vehicles/model.js');
const inventoryModel = require('./inventory/model.js');
const maintenanceModel = require('./maintenance/model.js');

const userModel = require('../auth/models/users.js');

const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const sequelize = new Sequelize(DATABASE_URL, {logging:false});


const vehicles = vehicleModel(sequelize, DataTypes);
const inventory = inventoryModel(sequelize, DataTypes);
const maintenance = maintenanceModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  vehicles: new Collection(vehicles),
  inventory: new Collection(inventory),
  maintenance: new Collection(maintenance)
};
