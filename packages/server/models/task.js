'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate (models) {
      // define association here
    }
  }
  Task.init(
    {
      taskBody: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { notContains: 'fuck' }, // :)
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );
  return Task;
};
