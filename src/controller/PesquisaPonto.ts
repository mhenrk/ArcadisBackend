import prisma from "../config/prisma";
import { Request, Response } from "express";

const PesquisarPontos = async (req: Request, res: Response) => {
  const { nome } = req.query;

  try {
    const query = await prisma.pontos.findFirst({
      where: {
        nome: {
          contains: `${nome}`,
        },
      },
    });

    return res.status(200).json({
      message: "OK",
      body: query,
    });
  } catch (error) {
    console.log(error)
  }
};

export default PesquisarPontos;
