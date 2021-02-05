var knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    port: "",
    password: "",
    database: "loja_fullstackphp",
  },
});

module.exports = knex;
