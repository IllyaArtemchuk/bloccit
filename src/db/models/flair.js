'use strict';
module.exports = (sequelize, DataTypes) => {
  var Flair = sequelize.define('Flair', {
    name: {
      type: DataTypes.STRING,
      allowNull: false},
    color: {
      type: DataTypes.STRING,
      allowNull: false},
  }, {});
  Flair.associate = function(models) {
    Flair.hasMany(models.Post, {
      foreignKey: "flairId",
      as: "flairs",
    })
  };
  return Flair;
};