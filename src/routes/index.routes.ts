import { Router } from "express";
import * as controller from '../controller/index'

const controllers = require("../controller/index");

routes.post("/ponto", controllers.CadastraPonto);
routes.get("/ponto", controllers.PesquisaPonto);

routes.post("/parametro", controllers.CadastraParametro);
routes.get("/parametro", controllers.PesquisarParametro);

routes.get("/mostrar", controllers.ListarPontosParametros);

routes.get("/violacoes", controllers.ListarPontosParametros);

export default routes;
