const { Task } = require('../models');
const _ = require('lodash');

const excludedData = ['createdAt', 'updatedAt'];

module.exports.getTasks = async (req, res, next) => {
  try {
    const foundTasks = await Task.findAll({
      raw: true,
      attributes: { exclude: excludedData },
    });
    res.status(200).send({ data: foundTasks });
  } catch (e) {
    next(e);
  }
};
module.exports.createTask = async (req, res, next) => {
  const { body } = req;
  try {
    const createdTask = await Task.create(body);
    const prepairedTask = _.omit(createdTask.get(), excludedData);
    res.status(201).send({ data: prepairedTask });
  } catch (e) {
    next(e);
  }
};
