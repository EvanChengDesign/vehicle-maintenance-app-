'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const vehicleModel = require('./vehicles/model.js');
const partsModel = require('./parts/model.js')

const userModel = require('../auth/models/users.js');

const Collection = require('./data-collection.js');
// const { Col } = require('sequelize/lib/utils');

// const environment = process.env.NODE_ENV;
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL, {logging:false});

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const vehicles = vehicleModel(sequelize, DataTypes);
const parts = partsModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  vehicles: new Collection(vehicles),
  parts: new Collection(parts),
  food: new Collection(food),
  clothes: new Collection(clothes),
};
