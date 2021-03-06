const { Task } = require('../models');
const _ = require('lodash');

const excludedData = ['createdAt', 'updatedAt'];

module.exports.getTasks = async (req, res, next) => {
  const { pagination } = req;
  try {
    const foundTasks = await Task.findAll({
      raw: true,
      order: [['createdAt', 'DESC']],
      attributes: { exclude: excludedData },
      ...pagination,
    });
    const tasksAmount = await Task.count(); // данные над данными - метаданные. Логично же, ну
    res.status(200).send({ data: foundTasks, metadata: tasksAmount });
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
    body,
    params: { taskId },
  } = req;
  try {
    const [count, [updatedTask]] = await Task.update(body, {
      where: { id: taskId },
      returning: true,
    });

    if (count > 0) {
      const preparedTask = _.omit(updatedTask.get(), excludedData);
      res.status(200).send({ data: preparedTask });
    } else {
      res.status(404).send('Not found');
    }
  } catch (e) {
    next(e);
  }
};
