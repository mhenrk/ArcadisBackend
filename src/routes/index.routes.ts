import { Router } from "express";
import controllers from "../controller/index";

const routes: Router = Router();

routes.post("/ponto", controllers.CadastraPonto);
routes.get("/ponto", controllers.PesquisaPonto);

//cadastrar um parametro referente a um ponto
routes.post("/parametro", controllers.CadastraParametro);

//cadastrar todos os pontos dereferencia divulgados
routes.post("/parametro/referencia", controllers.ParametrosReferencia);

//pesquisar por um parametro
routes.get("/parametro", controllers.PesquisarParametro);

routes.get("/mostrar", controllers.ListarPontosParametros);

routes.get("/violacoes", controllers.VisualizaViolacao);

export default routes;
