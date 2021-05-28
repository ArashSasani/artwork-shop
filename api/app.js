require("express-async-errors");
const morgan = require("morgan");
const express = require("express");
const app = express();

require("./startup/routes")(app);
require("./startup/db")();
require("./startup/logging")();

if (app.get("env") === "development") app.use(morgan("dev"));

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
