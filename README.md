# 📦 DataBridgeTS

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


## Preparar o ambiente typescript:

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

# TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.
Este é um projeto muito simples que mostra o uso do Next.js com TypeScript.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)

## How to use it?

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app@latest --example with-typescript with-typescript-app
```

```bash
yarn create next-app@latest --example with-typescript with-typescript-app
```

```bash
pnpm create next-app@latest --example with-typescript with-typescript-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.
Este exemplo mostra como integrar o sistema de tipos TypeScript ao Next.js. Como o TypeScript é suportado de fábrica pelo Next.js, tudo o que precisamos fazer é instalar o TypeScript.

```shell
npm install --save-dev typescript
```

```shell
yarn install --save-dev typescript
```

```shell
pnpm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.
Para habilitar os recursos do TypeScript, instalamos as declarações de tipo para React e Node.

```shell
npm install --save-dev @types/react @types/react-dom @types/node
```

```shell
yarn install --save-dev @types/react @types/react-dom @types/node
```

```shell
pnpm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.
Quando executarmos `next dev` na próxima vez, o Next.js começará a procurar por quaisquer arquivos `.ts` ou `.tsx` em nosso projeto e o compilará. Ele até cria automaticamente um arquivo `tsconfig.json` para o nosso projeto com as configurações recomendadas.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.
O Next.js possui declarações TypeScript integradas, portanto, teremos o preenchimento automático para os módulos do Next.js imediatamente.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
Um script `type-check` também foi adicionado ao `package.json`, que executa a CLI `tsc` do TypeScript no modo `noEmit` para executar a verificação de tipo separadamente. Você pode então incluir isso, por exemplo, em seus scripts de `teste`.

## Diferenças entre os comandos

1.  Cria um projeto do zero, com perguntas interativas (TypeScript, Tailwind, App Router etc.):
```bash
npx create-next-app@latest nome-do-projeto
```
2.  Clona o exemplo e cria um projeto configurado com TypeScript, exatamente como está no exemplo do GitHub.
Use `--example` quando você quiser um projeto pré-configurado, com tudo pronto para um caso de uso específico.
a.  `--example with-typescript`: usa o template "with-typescript" diretamente do repositório oficial do Next.js no GitHub
b.  `with-typescript-app`: será o nome da pasta do projeto criado.
```bash
npx create-next-app@latest with-typescript-app -e with-typescript
```
3.  Forma mais explícita de fazer isso, muito comum na documentação para deixar claro qual exemplo usar:
```bash
npx create-next-app@latest --example with-typescript with-typescript-app
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Criando o projeto com nextjs e typescript

```bash
npx create-next-app@latest projeto-espaco-curumim
```

```bash
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack for `next dev`? ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
√ What import alias would you like configured? ... @/*
```

Creating a new Next.js app in C:\Users\cesar\Documents\Documentos B\react-next-typescript\dominando-nextjs.

Using npm.

Initializing project with template: app-tw

Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- @tailwindcss/postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Abrir o VS Code

Utilize o comando abaixo dentro do diretório do projeto para abri-lo no VS Code:
PS C:\Users\cesar\Documents\Documentos B\nome-do-projeto\dominando-nextjs> code .

## Rodar o servidor para iniciar a aplicação

### Clique com o botão direito na raiz do projeto, escolha a opção open in integrated terminal e digite o comando:
```bash
npm run dev (rodar o comando run em modo de desenvolvimento)
```

## Instala o núcleo do FontAwesome, que é essencial para gerenciar os ícones e sua renderização no React.
```bash
npm install --save @fortawesome/fontawesome-svg-core
```

## Instala o pacote de ícones de estilo sólido (solid), como casa, telefone, envelope, etc.
```bash
npm install --save @fortawesome/free-solid-svg-icons
```

## Instala o pacote de ícones de marcas, como Facebook, Instagram, YouTube, LinkedIn e outros.
```bash
npm install --save @fortawesome/free-brands-svg-icons
```

## Instala o componente React que permite usar os ícones do FontAwesome de forma declarativa nos seus componentes React.
```bash
npm install --save @fortawesome/react-fontawesome
```

## Verifique se o TailwindCSS está instalado corretamente:

### Execute:
npm list tailwindcss

### Se aparecer erro ou não estiver listado, reinstale:
npm install -D tailwindcss

### limpar o cache do npm:
npm cache clean --force
