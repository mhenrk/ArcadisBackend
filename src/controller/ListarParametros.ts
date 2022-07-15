import prisma from "../config/prisma";
import { Request, Response } from "express";

const ListarParametros = async (req: Request, res: Response) => {
  const { nome } = req.query;

  try {
    const query = await prisma.parametros.findMany();
    
    return res.status(200).json({
      message: "Parametros Encontrados",
      body: query,
    });
  } catch (error) {
    console.log(error)
  }
};

export default ListarParametros;
