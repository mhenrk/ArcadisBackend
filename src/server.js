const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

app.listen(process.env.LPORT, () => console.log('Rodando na porta 3000'))