import prisma from "../config/prisma";
import { Request, Response } from "express";

const PesquisarParametros = async (req: Request, res: Response) => {
  const { parametro } = req.query;

  try {
    const query = await prisma.parametros.findFirst({
      where: {
        nome: {
          contains: `${parametro}`,
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

export default PesquisarParametros;
