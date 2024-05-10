'use strict';

const partsModel = (sequelize, DataTypes) => sequelize.define('Parts', {
  name: { type: DataTypes.STRING, required: true },
  cost: { type: DataTypes.INTEGER, required: true },
  type: { type: DataTypes.ENUM('engine', 'suspension', 'transmission', "exterior", "interior", "wheels/tires/breaks", "fluids/filters", "exhaust", "electronics" ), required: true }
});

module.exports = partsModel;