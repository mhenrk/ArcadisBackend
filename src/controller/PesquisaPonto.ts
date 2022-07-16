import prisma from "../config/prisma";
import { Request, Response } from "express";

const PesquisarPontos = async (req: Request, res: Response) => {
  const { nome } = req.query;

  try {
    const query = await prisma.pontos.findMany({
      where: {
        nome: `${nome}`,
      },
      include: {
        Parametros: true,
      },
    });

    return res.status(200).json({
      message: "Sucesso",
      body: query,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro",
      body: "Ocorreu um erro",
    });
  }
};

export default PesquisarPontos;
