const { Router } = require('express');
const { taskController } = require('../controllers');
const { paginate } = require('../middleware');

const taskRouter = Router();

taskRouter
  .route('/')
  .get(paginate.tasksPagination, taskController.getTasks)
  .post(taskController.createTask);

taskRouter
  .route('/:taskId')
  .delete(taskController.deleteTask)
  .patch(taskController.updateTask);
module.exports = taskRouter;
