import prisma from "../config/prisma";
import { Request, Response } from "express";

const VisualisarViolacao = async (req: Request, res: Response) => {
    try {

        const listarParametrosViolados = await prisma.parametros.findMany({
            include: {
                pontos: true
            },
            where: {
                isViolated: true
            }
        })

        return res.status(200).json({
            message: "Sucesso",
            body: listarParametrosViolados
        })
    } catch (error) {
         return res.status(400).json({
            message: "Erro",
            body: "Ocorreu um erro"
        })
    }
}

export default VisualisarViolacao;