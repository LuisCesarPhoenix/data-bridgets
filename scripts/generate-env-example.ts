// scripts/generate-env-example.ts

import fs from 'fs';
//importa o módulo fs para trabalhar com arquivos no Node.js
import path from 'path';
//importa o módulo path para trabalhar com caminhos de arquivos
import { envSchema } from '../src/config/env';
//importa o schema de configuração envSchema do arquivo env.ts

const envExamplePath = path.resolve(__dirname, '../.env.example');
// Define o caminho para o arquivo .env.example
const parsedSchema = envSchema._def.shape();
// Cria uma string vazia para armazenar o conteúdo do arquivo .env.example

let envExample = '';

for (const key in parsedSchema) {
  const def = parsedSchema[key]._def;
  let defaultValue = '';

  // Tentamos extrair o valor padrão se existir
  if ('defaultValue' in def) {
    defaultValue = def.defaultValue?.().toString();
  }

  envExample += `${key}=${defaultValue}\n`;
}

// Escreve o conteúdo no .env.example
fs.writeFileSync(envExamplePath, envExample.trim());
console.log('✅ Arquivo .env.example gerado com sucesso!');

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
