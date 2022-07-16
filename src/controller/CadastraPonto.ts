import prisma from "../config/prisma";
import { Request, Response } from "express";

const CadastraPonto = async (req: Request, res: Response) => {

  const { nome, xPos, yPos } = req.body;  

  try {
    const novoPonto = await prisma.pontos.create({
      data: {
        nome,
        xPos,
        yPos,
      },
    });

    return res.status(201).json({
      message: "Sucesso",
      body: novoPonto,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro",
      body: "Ponto já cadastrado",
    });
  }
};

export default CadastraPonto;
