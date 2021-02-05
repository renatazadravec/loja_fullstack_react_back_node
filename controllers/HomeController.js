var knex = require("../database/connection");

class homeController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas Principais");
  }

}

module.exports = new homeController();
