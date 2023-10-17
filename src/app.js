import express from "express";
import conectaDatabase from "./config/dbConfig.js";
import routes from "./routes/index.js";

const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexao", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso!");
});

const app = express();
routes(app);

export default app;
