const yup = require('yup');
const {
  PAGINATION_VALIDATION_SCHEMA,
} = require('./../utils/validationSchemas');

module.exports.tasksPagination = async (req, res, next) => {
  const {
    query: { page, results },
  } = req;

  const defaultPagination = { limit: 5, offset: 0 };

  const pagination = {
    limit: results ?? defaultPagination.limit,
    offset: (page - 1) * defaultPagination.limit,
  };

  try {
    if (await PAGINATION_VALIDATION_SCHEMA.isValid(pagination)) {
      req.pagination = pagination;
    } else {
      req.pagination = defaultPagination;
    }
  } catch (e) {
    next(e);
  }
  next();
};
