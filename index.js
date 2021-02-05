var bodyParser = require("body-parser");
var express = require("express");
const cors = require("cors");
var app = express();
var router = require("./routes/routes");
var routerProduto = require("./routes/routesProduto");
var routerCategoria = require("./routes/routesCategoria");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use("/", router);
app.use("/produto", routerProduto);
app.use("/categoria", routerCategoria);


app.listen(8000, () => {
  console.log("Servidor rodando");
});
