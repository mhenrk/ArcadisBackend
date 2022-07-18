import {app} from './app'

app.listen(process.env.LPORT, () => {
    console.log(`Servidor: http://localhost:${process.env.LPORT}`)
    console.log(`Documentação: http://localhost:${process.env.LPORT}/api-docs`)
});