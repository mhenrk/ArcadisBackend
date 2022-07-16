import express, { Express, Request, Response } from "express";
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'

import routes from "./routes/index.routes";
import swaggerDocs from './swagger.json'

const app: Express = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use(routes);


app.listen(process.env.LPORT, () => {
    console.log(`Servidor: http://localhost:${process.env.LPORT}`)
    console.log(`Documentação: http://localhost:${process.env.LPORT}/api-docs`)
});
