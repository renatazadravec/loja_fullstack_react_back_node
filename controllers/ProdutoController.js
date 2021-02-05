var knex = require("../database/connection");

class ProdutoController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de Produto");
  }

  async getAll(req, res) {
    try {
      const produtos = await knex("produtos")
      .join("categorias", "produtos.categoria_id", "categorias.id")
      .select("produtos.nome","produtos.descricao","produtos.preco","produtos.preco_promocao", "produtos.imagem", "categorias.nome as categoriaNome", "categorias.slug")

      res.status(200).json({ status: "OK", produtos });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR" });
    }
  }

}

module.exports = new ProdutoController();
