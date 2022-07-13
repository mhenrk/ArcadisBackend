import prisma from "../config/prisma";
import { Request, Response } from "express";

const CadastraPonto = async (req: Request, res: Response) => {
  const { nome, xPos, yPos } = req.body;

  console.log(nome, xPos, yPos)

  try {
    const novoPonto = await prisma.pontos.create({
      data: {
        nome,
        xPos,
        yPos,
      },
    });

    return res.status(201).json({
      message: "CREATED",
      body: novoPonto,
    });
  } catch (error) {
    console.log(error)
  }
};

export default CadastraPonto;
