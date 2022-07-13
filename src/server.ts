import express, { Express } from "express";
import routes from "./routes/index.routes";
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.get('/ok', (req, res) => {
    res.send('ok')
})
app.use(routes);

app.listen(process.env.LPORT, () => console.log(`http://localhost:${process.env.LPORT}`));
