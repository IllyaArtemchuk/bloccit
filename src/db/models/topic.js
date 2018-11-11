'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic = sequelize.define('Topic', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Topic.associate = function(models) {
    Topic.hasMany(models.Banners, {
      foreignKey: "topicId",
      as: "banners",
    });
  };
  return Topic;
};