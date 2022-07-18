import express from "express";
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'

import routes from "./routes/index.routes";
import swaggerDocs from './swagger.json'

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use(routes);

export {app}
