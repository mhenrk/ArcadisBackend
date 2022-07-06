import prisma from "../config/prisma";
import { Request, Response } from "express";

const PesquisarPontos = async (req: Request, res: Response) => {
  const { ponto } = req.query;

  try {
    const query = await prisma.pontos.findFirst({
      where: {
        nome: {
          contains: `${ponto}`,
        },
      },
    });

    return res.status(200).json({
      message: "OK",
      body: query,
    });
  } catch (error) {
    return res.status(200).json({
      err: error.message,
    });
  }
};

export default PesquisarPontos;
