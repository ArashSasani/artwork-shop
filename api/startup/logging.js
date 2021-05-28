const winston = require("winston");
require("winston-mongodb");

module.exports = function () {
  //catch exceptions on node process level
  process.on("uncaughtException", (ex) => {
    winston.error(ex.message, ex);
    process.exit(1);
  });
  process.on("unhandledRejection", (ex) => {
    winston.error(ex.message, ex);
    process.exit(1);
  });

  winston.add(new winston.transports.Console());
  winston.add(
    new winston.transports.File({ filename: "errorLog.log", level: "error" })
  );
  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://localhost/artwork-shop",
      level: "error",
      options: {
        useUnifiedTopology: true,
      },
    })
  );
};
