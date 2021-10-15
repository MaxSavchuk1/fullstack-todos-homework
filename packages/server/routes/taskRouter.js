const { Router } = require('express');
const { taskController } = require('../controllers');

const taskRouter = Router();

taskRouter
  .route('/')
  .get(taskController.getTasks)
  .post(taskController.createTask);

module.exports = taskRouter;
