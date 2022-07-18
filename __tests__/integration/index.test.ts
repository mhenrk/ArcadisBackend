import prisma from "../../src/config/prisma";
import request from "supertest";
import { app } from "../../src/app";

// CADASTRA UM PONTO
describe("POST /ponto", () => {
  test("Cadastra um novo ponto", async () => {
    const data = {
      nome: "Ponto 001",
      xPos: "2.1123",
      yPos: "54.5160",
    };

    await request(app)
      .post("/ponto")
      .send(data)
      .expect(201)
      .then((response) => {
        expect(response.body.message).toEqual("Sucesso");
      });

    const novoPontoCadastrado = await prisma.pontos.findFirst({
      where: {
        nome: `${data.nome}`,
      },
    });

    expect(novoPontoCadastrado).toBeTruthy();
  });
});

//LISTA TODOS OS PONTOS
describe("GET /ponto", () => {
  test("Lista todos os parametros cadastrados", async () => {
    const resp = await request(app).get("/ponto");
    expect(resp.body.message).toEqual("Sucesso");
    expect(resp.statusCode).toBe(200);
  });
});

//PESQUISAR UM PONTO
describe("GET /ponto/pesquisar", () => {
  test("Pesquisa um ponto via query string", async () => {
    const query = "Ponto 01";

    const resp = await request(app).get(`/ponto/pesquisar?nome=${query}`);
    expect(resp.body.message).toEqual("Sucesso");
    expect(resp.statusCode).toBe(200);
  });
});

//PESQUISAR UM PONTO SEM PASSAR VALOR
describe("GET /ponto/pesquisar", () => {
  test("Pesquisa um ponto SEM passar valor na variavel", async () => {
    const query = "";

    const resp = await request(app).get(`/ponto/pesquisar?nome=${query}`);
    expect(resp.statusCode).toBe(400);
    expect(resp.body.message).toEqual("Informe um termo para pesquisar");
  });
});

//CADASTRA UM PARAMETRO
describe("POST /parametro", () => {
  test("Cadastra um novo parametro", async () => {
    const query = "Ponto 01";
    const now = new Date();

    const resp = await request(app).get(`/ponto/pesquisar?nome=${query}`);

    const data = {
      nome: "DBO",
      valor: 6.99,
      data_coleta: now,
      pontosId: resp.body.body.id,
    };

    await request(app)
      .post("/parametro")
      .send(data)
      .expect(201)
      .then( async (response) => {
        expect(response.body.body.nome).toBe(data.nome)
        expect(response.body.body.pontosId).toBe(data.pontosId)
      });
  });
});

//LER TODOS OS PARAMETROS
describe("GET /parametro", () => {
  test("Lista todos os parametros cadastrados", async () => {
    const resp = await request(app).get("/parametro");
    expect(resp.body.message).toEqual("Sucesso");
    expect(resp.statusCode).toBe(200);
  });
});

//PESQUISAR UM PARAMETRO
describe("GET /parametro/pesquisar", () => {
  test("Pesquisa um parametro via query string", async () => {
    const query = "DBO";

    const resp = await request(app).get(`/parametro/pesquisar?nome=${query}`);
    expect(resp.body.message).toEqual("Sucesso");
    expect(resp.statusCode).toBe(200);
  });
});

//PESQUISAR UM PARAMETRO
describe("GET /parametro/pesquisar", () => {
  test("Pesquisa um parametro SEM passar valor na variavel", async () => {
    const query = "";

    const resp = await request(app).get(`/parametro/pesquisar?nome=${query}`);
    expect(resp.statusCode).toBe(400);
    expect(resp.body.message).toEqual("Informe um termo para pesquisar");
  });
});

//LER TODOS PARAMETROS VIOLADOS
describe("GET /parametro/violacoes", () => {
  test("Lista todos os parametros que durante o cadastro possuem parametros violados", async () => {
    const resp = await request(app).get("/parametro/violacoes");
    expect(resp.body.message).toEqual("Sucesso");
    expect(resp.statusCode).toBe(200);
  });
});

// GERA PARAMETROS DE REFERENCIA
describe('GET /parametro/referencia', () => {
    test('Cria Tabela de Referencia', async () => {
        const resp = await request(app).get('/parametro/referencia')

        expect(resp.statusCode).toBe(201)
        expect(resp.body.message).toEqual("Sucesso");
    })
})

//VALIDA SE UM PARAMETRO FOI VIOLADO DURANTE O CADASTRO
describe('POST /parametro', () => {
  test('Valida se um parametro está violado', async () => {
    const query = "Ponto 01";
    const now = new Date();

    const resp = await request(app).get(`/ponto/pesquisar?nome=${query}`);

    const data = {
      nome: "DBO",
      valor: 6.99,
      data_coleta: now,
      pontosId: resp.body.body.id,
    };

    await request(app)
      .post("/parametro")
      .send(data)
      .expect(201)
      .then( async (response) => {
        expect(response.body.body.isViolated).toBe(false)
      });
  })
})

//ERRO SE TENTAR GERAR PARAMETROS DE REFERENCIA MAIS DE 1X
describe('GET /parametro/referencia', () => {
  test('Retorna tabela de referencia já inicializada', async () => {
      const resp = await request(app).get('/parametro/referencia')

      expect(resp.statusCode).toBe(400)
      expect(resp.body.message).toEqual("Tabela já inicializada");
  })
})

//ERRO SE TENTAR CADASTRAR O MESMO PONTO
describe("POST /ponto", () => {
  test("Erro ao tentar cadastrar ponto igual", async () => {
    const data = {
      nome: "Ponto 001",
      xPos: "2.1123",
      yPos: "54.5160",
    };

    await request(app)
      .post("/ponto")
      .send(data)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toEqual("Erro");
      });
  });
});