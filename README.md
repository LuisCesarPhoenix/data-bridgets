📦 DataBridgeTS

Esse projeto lida com múltiplas fontes de dados, processamento de arquivos CSV e é robusto:

Explicação:
Data: porque o foco está em manipular dados (migração, higienização, etc.);
Bridge: porque ele conecta várias tecnologias (MySQL, MongoDB, OwnCloud, RabbitMQ);
TS: para indicar que está em TypeScript, o que mostra que é uma versão moderna e tipada da aplicação

.
├── .env
├── .eslintrc.json
├── .prettierrc
├── package.json
├── tsconfig.json
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   │   └── env.ts
│   ├── routes/
│   │   └── index.ts
│   ├── controllers/
│   │   └── example.controller.ts
│   ├── services/
│   │   ├── mysql.service.ts
│   │   ├── mongo.service.ts
│   │   ├── owncloud.service.ts
│   │   └── rabbitmq.service.ts
│   └── utils/
│       └── logger.ts
