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

module.exports.deleteTask = async (req, res, next) => {
  const {
    params: { taskId },
  } = req;
  try {
    const deletedCount = await Task.destroy({ where: { id: taskId } });
    if (deletedCount) {
      res.status(204).send();
    } else {
      res.status(404).send('task not found');
    }
  } catch (e) {
    next(e);
  }
};

module.exports.updateTask = async (req, res, next) => {
  const {
    params: { taskId },
  } = req;
  const body = { isDone: !isDone }; // пока заглушка
  try {
    const [count] = await Phone.update(body, {
      where: { id: taskId },
    });
    if (count) {
      res.status(204).send();
    } else {
      res.status(404).send('Not found');
    }
  } catch (e) {
    next(e);
  }
};
