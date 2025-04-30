// scripts/generate-env-example.ts

import fs from 'fs';
// Importa o módulo 'fs' para manipulação de arquivos no Node.js

import path from 'path';
// Importa o módulo 'path' para lidar com caminhos de arquivos

import { env } from '../src/config/env';
// Importa o objeto 'env' que contém as variáveis de ambiente já tipadas

const envExamplePath = path.resolve(__dirname, '../.env.example');
// Define o caminho absoluto para o arquivo .env.example na raiz do projeto

let envExample = '';
// Inicializa uma string vazia que irá armazenar o conteúdo do .env.example

for (const key in env) {
  // Itera sobre cada chave presente no objeto 'env'

  const value = env[key as keyof typeof env];
  // Recupera o valor correspondente à chave atual, garantindo o tipo correto

  envExample += `${key}=${value ?? ''}\n`;
  // Adiciona a chave e seu valor ao conteúdo do .env.example (ou valor vazio se undefined)
}

fs.writeFileSync(envExamplePath, envExample.trim());
// Escreve o conteúdo gerado no arquivo .env.example, removendo espaços extras no final

console.log('✅ Arquivo .env.example gerado com sucesso!');
// Exibe uma mensagem de sucesso no terminal


/*
Resumo do Fluxo do Código
1. Importa o módulo fs para trabalhar com arquivos.
2. Importa o módulo path para trabalhar com caminhos de arquivos.
3. Importa o schema de configuração envSchema do arquivo env.ts.
4. Define o caminho para o arquivo .env.example.
5. Cria uma string vazia para armazenar o conteúdo do arquivo .env.example.
6. Itera sobre as chaves do schema de configuração.
	 a) Obtem o def da chave correspondente no schema.
	 b) Tenta extrair o valor padrão se existir.
	 c) Adiciona a chave e o valor padrão ao arquivo .env.example.
7. Escreve o conteúdo no arquivo .env.example.
8. Imprime uma mensagem indicando que o arquivo foi gerado com sucesso.
*/

/*
Dica extra: transforme em script do package.json

1.	Adicione isso no package.json:
"scripts": {
  "env:example": "ts-node scripts/generate-env-example.ts"
}
2.	Agora você pode gerar o arquivo rodando:
npm run env:example
*/
