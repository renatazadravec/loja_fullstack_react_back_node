var knex = require("../database/connection");

class catController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de Categorias");
  }

  async getAll(req, res) {
    try {
      const categorias = await knex.select().table("categorias");

      res.status(200).json({ status: "OK", categorias });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }
}

module.exports = new catController();
