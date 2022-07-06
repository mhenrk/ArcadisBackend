import express, { Express } from "express";
import routes from "./routes/index.routes";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(process.env.LPORT, () => console.log("Rodando na porta 3000"));
