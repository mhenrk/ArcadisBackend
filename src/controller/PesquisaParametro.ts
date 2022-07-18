import prisma from "../config/prisma";
import { Request, Response } from "express";

const PesquisarParametros = async (req: Request, res: Response) => {
  const { nome } = req.query;

  try {

    if(!nome){
      return res.status(400).json({
        message: 'Informe um termo para pesquisar'
      })
    }

    const query = await prisma.parametros.findMany({
      where: {
        nome: `${nome}`
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

export default PesquisarParametros;
