const errors = require("../constants/errors");
const winston = require("winston");

module.exports = function (err, req, res, next) {
  //log the error
  winston.error(err.message, err);
  //return response
  res.status(500).send(errors[500]);
};
