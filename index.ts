// index.ts
// Arquivo principal que importa a configuração (app) do server.ts e inicializa o servidor sem abrir conexões.

import app from './server'; 
// Importa o objeto app do server.ts

const PORT: number = parseInt(process.env.PORT || '3000', 10);
// Define a porta onde o servidor vai rodar.
// Usa a variável de ambiente PORT ou, se não definida, a porta padrão 3000.

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
// Inicia o servidor Express e faz com que ele escute conexões na porta definida.

/*
Resumo do Fluxo do Código
1. O index.ts é o ponto de entrada da aplicação.
   a) Ele importa o app do server.ts, que contém toda a configuração do servidor Express (middlewares, rotas, plugins, etc.).
   b) Isso separa responsabilidades, deixando o server.ts focado na configuração e o index.ts focado em iniciar o servidor.

2. Define a porta do servidor.
   a) Se houver uma variável de ambiente PORT, ela será usada.
   b) Caso contrário, o servidor rodará na porta 3000 por padrão.

3. Inicia o servidor.
   O método app.listen(PORT, callback) faz o servidor começar a escutar requisições na porta definida.
*/