## PROJETO DESENVOLVEDOR PLENO FULLSTACK ARCADIS

## DESCRIÇÃO
Desenvolvimento de uma API NodeJS que:
- Cadastre um ponto, uma única vez (manualmente)
- Para cada ponto, possa ser possivel cadastrar um ou mais parametros
- Seja possivel listar todos os pontos e parametros
- Seja possivel ver os pontos que violaram a legislação
- Seja possivel pesquisar um ponto
- Seja possivel pesquisar um parametro

## REQUISITOS
- Prisma ORM
- MySQL
- Express
- DotEnv
- Typescript

## COMO INSTALAR

Para instalar a aplicação, faça um clone deste repositório Git, através do comando `git clone` e acesse a pasta utilizando o comando `cd ArcadisBackend`, dentro da pasta instale as dependencias através do comando `yarn` e aguarde a finalização da instalação dos pacotes.


## COMO UTILIZAR

Dentro da pasta `src` localize o arquivo `.env_example` e renomeie para `.env` dentro deste arquivo é possivel identificar 2 variaveis de ambiente `LPORT` variável utilizada no middleware express `app.listen` e que fará o apontamento da porta do nosso servidor express na aplicação e a variavel `DATABASE_URL` responsável por realizar a comunicação com o banco de dados através do ORM Prisma, para esta variavel utilize a seguinte estrutura (exemplo para mysql) `DATABASE_URL:provider://usuario:senha@hostname:porta/database_name` onde `provider` será o tipo de banco de dados utilizado. *** ATENÇÃO, Caso for utilizar outro "PROVIDER" acesse a pasta ./prisma/schema.prisma e altere a variavel provider para o seu banco de dados ***

Para inicializar a aplição, dentro da pasta ArcadisBackend, instale os pacotes através do comando `yarn` em seguida, execute o comando `yarn prisma migrate dev --name CreateAllTables` aguarde a criação das tabelas em seu banco de dados e inicialize a aplicação através do comando `yarn dev` para subir a aplicação em `http://localhost:LPORT` onde  `LPORT ` é a variável de ambiente encontrada no arquivo `.env_example` que deverá ser renomeado para `.env`

## ESTRUTURA DE PASTAS

ArcadisBackend - Contém todas a estrutura básica de arquivos, alem da pasta do ORM Prisma 

Pasta src - Pasta principal do projeto, contem a pasta config, controller, routes e o arquivo server.ts (entry point) da aplicação

src/config: 
- prisma.ts : Arquivo de configuração e comunicação com o banco de dados

src/controller:
- index.ts: pasta que importa/exporta todas as rotas do projeto
- cadastraparametro.ts: arquivo responsável por comunicar com o banco de dados, salvar e validar se um parametro é ou não um parametro violado de acordo com a tabela de parametros de refência.
- cadastraponto.ts: arquivo responsável por comunicar com o banco de dados e salvar um ponto
- listarparametros.ts: arquivo responsável por comunicar com o banco de dados e recuperar a lista de todos os parametros cadastrados na base de dados
- listarpontosparametros.ts: arquivo responsável por comunicar com o banco de dados e recuperar a lista de todos os pontos com seus respectivos parametros cadastrados
- parametroreferencia.ts: arquivo responsável por comunicar com o banco de dados e cadastrar todos os parametros da tabela de referencia
- pesquisaparametro.ts: arquivo responsável por comunicar com o banco de dados e recuperar a lista de todos os parametros cadastrados na base de dados atráves de um input recebido pelo frontend pelo body
- pesquisaponto.ts: arquivo responsável por comunicar com o banco de dados e recuperar a lista de todos os pontos cadastrados na base de dados atráves de um input recebido pelo frontend pelo body
- visualizaviolacao.ts: arquivo responsável por comunicar com o banco de dados e recuperar a lista de todos os pontos/parametros que possuem o atributo `isViolated: true`

src/routes:

Rotas:
- GET /mostrar - resposável por recuperar na base de dados todos os pontos e parametros cadastrados
- GET /violações - resposável por recuperar na base de dados todos os parametros violados
- GET /ponto - responsável por realizar a pesquisa de um ponto
- GET /parametro - responsável por realizar a pesquisa de um parametro
- GET /parametros - responsável por listar todos os parametros da aplicação

- POST /ponto - realiza o cadastro na base de dados
- POST /parametro - realiza o cadastro e validação se o ponto informado está ou não violado conforme tabela de parametros de referencia
- POST /parametro/referencia - responsável pela inicialização da tabela de parametros de referencia (utilizado para validação no cadastro de parametros.)
