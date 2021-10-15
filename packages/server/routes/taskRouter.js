const { Router } = require('express');
const { taskController } = require('../controllers');

const taskRouter = Router();

taskRouter
  .route('/')
  .get(taskController.getTasks)
  .post(taskController.createTask);

taskRouter
  .route('/:taskId')
  .delete(taskController.deleteTask)
  .patch(taskController.updateTask);
module.exports = taskRouter;
