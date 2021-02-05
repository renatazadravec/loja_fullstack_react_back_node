var express = require("express");
var app = express();
var routerCategoria = express.Router();
var catController = require("../controllers/CatController");

routerCategoria.get("/", catController.getAll);

module.exports = routerCategoria;
