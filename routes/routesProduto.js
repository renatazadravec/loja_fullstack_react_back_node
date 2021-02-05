var express = require("express");
var app = express();
var routerProduto = express.Router();
var ProdutoController = require("../controllers/ProdutoController");

routerProduto.get("/", ProdutoController.getAll);

module.exports = routerProduto;
