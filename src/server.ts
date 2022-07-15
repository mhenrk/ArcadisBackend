import express, { Express } from "express";
import routes from "./routes/index.routes";
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use(routes);

app.listen(process.env.LPORT, () => {
    console.log(`Me inicialize - Control + Click na URL: http://localhost:${process.env.LPORT}/parametro/referencia`)
});
