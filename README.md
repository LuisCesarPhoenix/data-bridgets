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


Preparar o ambiente typescript:

1.	Instale a versão LTS do Node.js, que é a recomendada para a maioria dos usuários, para poder executar o TypeScript:
	https://nodejs.org/pt

	Para ver a versão instalada digite o comando:
	node --version

2.	O PowerShell bloqueia a execução de scripts (como o npm.ps1) por padrão por motivos de segurança.
	A sua política de execução (ExecutionPolicy) está como Restricted, o que impede o npm de rodar corretamente.
	https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.5

	Solução rápida e segura:
	Abra o PowerShell como Administrador
	(Procure por PowerShell, clique com o botão direito e "Executar como administrador").

	Rode esse comando:
	Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

	RemoteSigned significa:
	Scripts baixados da internet precisam ser assinados por uma autoridade confiável, mas scripts criados localmente são liberados.

	Quando ele perguntar:
	"Tem certeza que deseja alterar a política de execução?"
	Digite S (de Sim) e pressione Enter.

3.	Depois disso, rode o seguinte comando para ele instalar o TypeScript globalmente (é preciso instalar o Node.js antes)
	O comando abaixo instala o TypeScript de maneira global:
	npm install -g typescript

	Para ver a versão instalada digite o comando:
	tsc --version

4.	Na raiz do projeto digite o seguinte comando para ele criar o tsconfig.json:
	npm --init

5.	Instale as dependências principais (express, dotenv, helmet) para usar pacotes como express, dotenv, helmet
	Rode o seguinte comandos na pasta do projeto ou onde está o tsconfig.json:
	npm install express dotenv helmet

6.	Instale os tipos para desenvolvimento (@types/node, @types/express, @types/helmet):
	npm install --save-dev @types/node @types/express @types/helmet

7.	Execute npm audit fix para eliminar as vulnerabilidades restantes

8.	Se quiser voltar depois para o modo seguro (opcional):
	Se um dia quiser deixar como estava (super restrito), é só rodar:
	Set-ExecutionPolicy Restricted -Scope CurrentUser

Agora, seu ambiente está pronto para rodar os arquivos que usam express, dotenv e helmet com tipagem completa no TypeScript.

Resumo do que você está fazendo:
a.	Você libera apenas o seu usuário para rodar scripts seguros.
b.	Você não está deixando o sistema inteiro vulnerável.
c.	Vai conseguir instalar o TypeScript normalmente.


Para transpilar o código do arquivo app.ts para JavaScript há duas opções:

Certifique-se de que o TypeScript está pegando o tsconfig.json correto.
o comando "tsc .\numberBigint.ts" ignora o tsconfig.json e transpila apenas o arquivo diretamente com as opções padrão.

Opção 1 - Compile o arquivo usando o tsconfig.json com este comando:
curso-typescript-zero-to-hero> tsc
Ou:
curso-typescript-zero-to-hero> tsc --project tsconfig.json
Assim o TypeScript vai usar as opções corretas (como target: "ESNext") e vai compilar com suporte a BigInt.

Para executar o arquivo app.js, execute o comando abaixo:
curso-typescript-zero-to-hero\modulo-01\helloworld> node .\nome-do-arquivo.js

Opção 2 - que é a recomendada, porém o arquivo tsconfig.json precisa ser criado na raiz do projeto:
a.  curso-typescript-zero-to-hero> tsc --init (cria o arquivo tsconfig.json na raiz do projeto)
b.  CTRL + SHIFT + B
c.  Escolha a opção tsc: watch - tsconfig.json (ele vai transpilar os documentos em tempo de execução)
d. 	Execute o comando: node .\nome-do-arquivo.js
