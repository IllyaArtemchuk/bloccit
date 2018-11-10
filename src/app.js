const express = require("express");
const app = express();

const routeConfig = requier("./config/route-config.js");

routeConfig.init(app);

module.exports = app;