import prisma from "../config/prisma";
import { Request, Response } from "express";

const CadastraParametro = async (req: Request, res: Response): Promise<Response> => {
  const { nome, valor, data_coleta, pontosId } = req.body;

  try {
    const novoParametro = await prisma.parametros.create({
      data: {
        nome,
        valor,
        data_coleta,
        pontosId
      }
    });

    return res.status(201).json({
      message: "CREATED",
      body: novoParametro,
    });
  } catch (error) {
    return res.status(500).json({ erro: error.message });
  }
};

export default CadastraParametro;
