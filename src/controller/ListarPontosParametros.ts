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
            message: 'OK',
            body: listar
        })
    } catch (error) {
        console.log(error)
    }
}

export default ListaPontosParametros;