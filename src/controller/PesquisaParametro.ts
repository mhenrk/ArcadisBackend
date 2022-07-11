import prisma from "../config/prisma";
import { Request, Response } from "express";

const PesquisarParametros = async (req: Request, res: Response) => {
  const { nome } = req.query;

  try {
    const query = await prisma.parametros.findFirst({
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

export default PesquisarParametros;
