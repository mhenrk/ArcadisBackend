import prisma from "../config/prisma";
import { Request, Response } from "express";

const PesquisarParametros = async (req: Request, res: Response) => {
  const { nome } = req.query;

  try {
    const query = await prisma.parametros.findMany({
      where: {
        nome: `${nome}`
      },
    });

    return res.status(200).json({
      message: "Pesquisa de Parametros",
      body: query,
    });
  } catch (error) {
    console.log(error)
  }
};

export default PesquisarParametros;
