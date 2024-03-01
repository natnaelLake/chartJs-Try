const express = require("express");
const app = express();
const useRoutes = require("./routes");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", useRoutes);

module.exports = app;
