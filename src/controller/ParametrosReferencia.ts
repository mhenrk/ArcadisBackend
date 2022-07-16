import prisma from "../config/prisma";
import { Request, Response } from "express";

const ParametrosReferencia = async (req: Request, res: Response) => {

    try {
        const novoParametroRerefencia = await prisma.paramsReferencia.createMany({
            data: [
                {
                    parametro: "Alumínio dissolvido",
                    valor: 0.1,
                },
                {
                    parametro: "Arsênio total",
                    valor: 0.01,
                },
                {
                    parametro: "Chumbo total",
                    valor: 0.01,
                },
                {
                    parametro: "Cobre dissolvido",
                    valor: 0.009,
                },
                {
                    parametro: "Escherichia coli",
                    valor: 1000.0,
                },
                {
                    parametro: "Cromo total",
                    valor: 0.05,
                },
                {
                    parametro: "Cádmio total",
                    valor: 0.001,
                },
                {
                    parametro: "DBO",
                    valor: 5.0,
                },
            ]
        })

        return res.status(201).json({
            message: 'Sucesso',
            body: "Parametros de Referencia cadastrados"
        })
    } catch (error) {
        return res.status(404).json({
            message: 'Erro',
            body: "Servidor não inicializado corretamente."
        })
    }
}

export default ParametrosReferencia;