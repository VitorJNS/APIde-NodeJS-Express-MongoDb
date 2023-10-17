import express from "express";
import EncontroController from "../controllers/encontroController.js";

const routes = express.Router();

routes.get("/encontros", EncontroController.listarEncontros);

routes.get("/encontros/busca", EncontroController.listarEncontrosPorAno);

routes.get("/encontros/:id", EncontroController.listarEncontrosPorId);

routes.post("/encontros", EncontroController.cadastrarEncontros);

routes.patch("/encontros/:id", EncontroController.atualizarEncontros);

routes.delete("/encontros/:id", EncontroController.deletarEncontros);

export default routes;