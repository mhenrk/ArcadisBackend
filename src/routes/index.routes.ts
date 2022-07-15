import { Router } from "express";
import controllers from "../controller/index";

const routes: Router = Router();

routes.post("/ponto", controllers.CadastraPonto);
routes.post("/parametro", controllers.CadastraParametro);

routes.get("/mostrar", controllers.ListarPontosParametros);
routes.get("/violacoes", controllers.VisualizaViolacao);
routes.get("/ponto", controllers.PesquisaPonto);

routes.get("/parametro", controllers.PesquisarParametro);
routes.get("/parametros", controllers.ListarParametros)

routes.post("/parametro/referencia", controllers.ParametrosReferencia);

export default routes;
