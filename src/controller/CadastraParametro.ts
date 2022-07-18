import prisma from "../config/prisma";
import { Request, Response } from "express";

interface IParametro {
  id: string,
  nome: string;
  valor: number;
  data_coleta: Date;
  pontosId: string
}

async function isViolatedParam(param: IParametro) {
  try {

    const parametroReferencia = await prisma.paramsReferencia.findFirstOrThrow({
      where: {
        parametro: {
          contains: `${param.nome}`,
        },
      },
    });

    if(!parametroReferencia) return new Error('Parametro informado não cadastrado')

    if (parametroReferencia instanceof Error) return new Error();

    if (param.valor > parametroReferencia.valor) {
      await prisma.parametros.update({
        where: {
          id: param.id,
        },
        data: {
          isViolated: true,
        },
      });
    }
  } catch (error) {
    return console.log(error);
  }
}

const CadastraParametro = async (
  req: Request,
  res: Response
) => {

  const { nome, valor, data_coleta, pontosId } = req.body;

  try {
    const novoParametro = await prisma.parametros.create({
      data: {
        nome,
        valor,
        data_coleta,
        pontosId,
      },
    });

    isViolatedParam(novoParametro);

    return res.status(201).json({
      message: "Sucesso",
      body: novoParametro,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Erro",
      body: error,
    });
  }
};

export default CadastraParametro;
