import prisma from "../config/prisma";
import { Request, Response } from "express";

const VisualisarViolacao = async (req: Request, res: Response) => {
    try {
        const listarParametrosViolados = await prisma.parametros.findMany({
            where: {
                isViolated: true
            }
        })

        return res.status(200).json({
            message: 'Registros Encontrados',
            body: listarParametrosViolados
        })
    } catch (error) {
        console.log(error)
    }
}

export default VisualisarViolacao;