import prisma from "../config/prisma";
import { Request, Response } from "express";

const VisualisarViolacao = async (req: Request, res: Response) => {
    try {

        const pontosParametrosViolados = await prisma.pontos.findMany({
            where: {
                Parametros: {
                    some: {
                        isViolated: true
                    }
                }
            }
        })

        const listarParametrosViolados = await prisma.parametros.findMany({
            include: {
                pontos: true
            },
            where: {
                isViolated: true
            }
        })

        console.log(listarParametrosViolados)

        return res.status(200).json({
            message: 'Registros Encontrados',
            body: listarParametrosViolados
        })
    } catch (error) {
        console.log(error)
    }
}

export default VisualisarViolacao;