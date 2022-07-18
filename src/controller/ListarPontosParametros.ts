import prisma from "../config/prisma";
import { Request, Response } from "express";

const ListaPontosParametros = async (req: Request, res: Response) => {
    try {
        const listar = await prisma.pontos.findMany({
            include: { 
                Parametros: true
            }
        })

        return res.status(200).json({
            message: "Sucesso",
            body: listar
        })
    } catch (error) {
        return res.status(404).json({
            message: 'Erro',
            body: "Ocorreu um erro"
        })
    }
}

export default ListaPontosParametros;