import { Router } from "express";
import controllers from "../controller/index";

const routes: Router = Router();

routes.post("/ponto", controllers.CadastraPonto); //ok
routes.get("/ponto", controllers.ListarPontosParametros); //ok
routes.get("/ponto/pesquisar", controllers.PesquisaPonto); //ok

routes.post("/parametro", controllers.CadastraParametro);// ok
routes.get("/parametro", controllers.ListarParametros) //ok
routes.get("/parametro/pesquisar", controllers.PesquisarParametro); //ok
routes.get("/parametro/violacoes", controllers.VisualizaViolacao); //ok
routes.get("/parametro/referencia", controllers.ParametrosReferencia);


export default routes;
