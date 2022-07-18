import prisma from "../config/prisma";
import { Request, Response } from "express";

const ListarParametros = async (req: Request, res: Response) => {

  try {
    const query = await prisma.parametros.findMany();
    
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

export default ListarParametros;
