import express, { Application } from "express";
/*
Importa o framework Express, que facilita a criação de servidores web e APIs no Node.js.
import express carrega o módulo do Express, permitindo que ele seja usado no código.
*/

import dotenv from "dotenv";
/*
Importa o módulo dotenv, que permite carregar variáveis de ambiente de um arquivo .env para o process.env.
O pacote dotenv lê o arquivo .env, que contém configurações como credenciais de banco de dados, chaves de API, etc.
Ele insere essas variáveis dentro do process.env, tornando-as acessíveis no código.
*/

import bodyParser from 'body-parser';
/*
Middleware usado para interpretar dados recebidos no corpo das requisições (JSON, formulários, etc.).
*/

import cors from 'cors';
/*
Habilita CORS para permitir requisições de diferentes origens (útil para front-end separado).
*/

import migrationRoutes from "./src/routes/migrationRoutes";
/*
Importa o arquivo migrationRoutes.ts, que contém as rotas responsáveis por lidar com a migração de dados.
*/

import fileProcessingRoutes from "./src/routes/fileProcessingRoutes";
/*
Importa as rotas definidas no arquivo "fileProcessingRoutes.ts", localizado dentro da pasta "src/routes".
*/

import userRoutes from "./src/routes/userRoutes";
/*
Importa as rotas de usuário que são responsáveis pelo CRUD de usuários no MySQL.
*/

import fileProcessingRoutesOwncloud from "./src/routes/fileProcessingRoutesOwncloud";
/*
Importa as rotas definidas no arquivo "fileProcessingRoutesOwncloud.ts", localizado dentro da pasta "src/routes".
*/

const app: Application = express();
/*
Cria uma instância do Express chamada app.
app representa o servidor da aplicação e é usado para definir rotas, middlewares e configurações.
*/

dotenv.config();
/*
Carrega as variáveis de ambiente do arquivo .env.
*/

// Middlewares globais
app.use(bodyParser.json());
// Permite receber e tratar JSON no corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));
// Permite receber dados de formulários
app.use(cors());
// Libera requisições de outras origens

app.use(express.json());
/*
Adiciona um middleware que permite o servidor interpretar requisições com JSON no corpo.
Sem isso, o Express não conseguiria processar req.body em requisições do tipo POST ou PUT enviadas como JSON.
*/

app.use("/api", migrationRoutes);
/*
Define um prefixo "/api" para todas as rotas importadas de migrationRoutes.ts.
Se migrationRoutes tiver uma rota /migrate, ela será acessível via /api/migrate.
*/

app.use("/api", fileProcessingRoutes);
/*
Adiciona as rotas de processamento de arquivos à aplicação Express, definindo o prefixo "/api" para acessá-las.
Por exemplo, uma rota "/process/:filename" será acessível via "POST /api/process/:filename".
*/

app.use("/api", userRoutes);
/*
Adiciona as rotas de usuário à aplicação Express, definindo o prefixo "/api" para acessá-las.
Agora, as rotas de usuário serão acessadas via "/api/users", "/api/users/:id", etc.
*/

app.use("/api", fileProcessingRoutesOwncloud);
/*
Adiciona as rotas de processamento de arquivos com OwnCloud à aplicação Express, também usando o prefixo "/api".
*/

export default app;
/*
Exporta a instância do Express (app) para que outros arquivos possam utilizá-la.
Dessa forma, o index.ts pode importar essa instância e iniciar o servidor sem precisar repetir as configurações.
*/

/*
Resumo do fluxo do código:
Esse código cria um servidor Express que:
- Aceita requisições JSON.
- Define um prefixo /api para as rotas.
- Importa as rotas de migração, processamento de arquivos e de usuários.
- Escuta conexões na porta 3000 (ou outra definida nas variáveis de ambiente).
*/

/*
O que mudou do JavaScript para TypeScript:
1. require substituído por import.
2. Tipagem explícita em app: Application
3. export default app no lugar de module.exports = app
4. Arquivo renomeado para server.ts
*/

/*
Melhorias aplicadas:
a. Uso do sistema de módulos ES6 (import/export) com compatibilidade TypeScript.
b. Tipagem explícita da aplicação com Application.
c. Organização semântica dos blocos (config, middlewares, rotas, export).
d. Comentários mantidos e otimizados para clareza e padrão didático.
*/
