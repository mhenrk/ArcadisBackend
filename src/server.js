const express = require("express");
const routes = require('./routes/index.routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

app.use(routes)

app.listen(process.env.LPORT, () => console.log('Rodando na porta 3000'))