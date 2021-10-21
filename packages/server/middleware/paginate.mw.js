const yup = require('yup');
const {
  PAGINATION_VALIDATION_SCHEMA,
} = require('./../utils/validationSchemas');

module.exports.tasksPagination = async (req, res, next) => {
  const {
    query: { page, results },
  } = req;
};
