const yup = require('yup');

module.exports.PAGINATION_VALIDATION_SCHEMA = yup.object().shape({
  limit: yup
    .number()
    .min(1)
    .max(10)
    .integer()
    .required(),
  offset: yup
    .number()
    .positive()
    .integer()
    .required(),
});

module.exports.TASK_VALIDATION_SCHEMA = yup.object().shape({
  taskBody: yup.string(254, 'Too big task').required('Required'),
  isDone: yup.boolean(),
});
