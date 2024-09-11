# FormulárioAngular

Este projeto é parte da atividade da matéria de Construção de Software II e será dividido em dois repositórios: este, que é o frontend em Angular, e o outro em Spring Boot.  
O projeto consiste em criar um aplicativo Angular com 3 páginas (formulário, visualização e listagem) e rotas.

## Atualização do README

Este README será continuamente atualizado para documentar e compartilhar as descobertas e aprendizados relacionados ao uso do Angular. Abaixo, está a documentação inicial sobre o Angular e as tecnologias associadas.

## Documentação sobre o Angular

Nesta seção, compartilharei as lições que aprendi sobre o Angular, incluindo instruções sobre como baixar e instalar as tecnologias associadas, como o VSCode e o Node.js.

### Node.js

A instalação do Node.js é bastante simples e pode ser realizada através [deste site](https://nodejs.org/). Selecione a versão "LTS" para Windows. Após a instalação, mantenha todas as configurações como padrão. Para verificar se foi instalado corretamente, abra o terminal e digite `node`. Isso mostrará que o Node.js foi instalado e exibirá sua versão. Para confirmar a instalação, você pode digitar `console.log('qualquer coisa')`.

### VSCode

A instalação do Visual Studio Code é feita através [deste site](https://code.visualstudio.com/). Selecione a versão para Windows e, após a instalação, execute o executável e mantenha todas as configurações como padrão.

### Angular

Após a instalação do Node.js e do VSCode, você pode instalar o Angular através do terminal. Certifique-se de que o terminal tenha acesso ao npm. Você pode instalar o Angular CLI globalmente com o comando:


- npm install -g @angular/cli

### Verificar Instalação do Angular CLI

Para verificar se o Angular CLI foi instalado corretamente, execute:

- ng version

### Criar um Novo Projeto Angular

Para criar um novo projeto Angular, execute o comando:

- ng new nome-do-seu-projeto


Ao criar um projeto Angular, opte por usar **SCSS** como formato de folha de estilo.

### Executar o Aplicativo Angular

Para executar o aplicativo Angular, navegue até o diretório do seu projeto no terminal e execute os comandos:

- cd nome-do-seu-projeto
- ng serve

Este comando iniciará o servidor de desenvolvimento e abrirá automaticamente seu navegador padrão no endereço [http://localhost:4200](http://localhost:4200), onde você poderá visualizar seu aplicativo Angular em execução.

### Estrutura do Projeto Angular

- **node_modules**: Dependências do projeto.
- **src**: Onde programar a aplicação.
- **src/app**: Pasta principal para componentes, services, etc.
  - **Componentes**: Divididos em TS, HTML, SCSS e testes.

### Comandos para Gerar Componentes e Módulos

- **Gerar Componente**:
  
  - ng generate component 'nome-do-componente'
  
- **Gerar Módulo**: ng g m 'nome do módulo'
  
- **Adicionar Angular Material ao Projeto**: ng add @angular/material
  
- **Adicionar Módulo com Rotas**: ng g m 'nome do módulo de roteamento' --routing
  
### Lazy Loading

O lazy loading é uma técnica utilizada no Angular para carregar módulos de forma assíncrona. Para implementar o lazy loading, defina uma rota especial usando a propriedade `loadChildren` no objeto de rota.

Exemplo de Lazy Loading para a rota `{ path: 'lista' }`:

- { path: 'lista', loadChildren: () => import('./lista/lista.module').then(m => m.ListaModule) }

### Customização de Paletas de Cores

- Para ver paletas de cor, utilize este [site](#).

### Criação de Interface

- ng g interface lista/model/itensLista

### Compartilhar Imports do Angular Material

- ng g m compartilhar/app-material

### Criar a Classe Service

- ng g s lista/services/lista

### Bootstrap

Em resumo, a função principal do Bootstrap é fornecer uma base sólida e eficiente para o desenvolvimento de interfaces web responsivas. Ele economiza tempo e esforço dos desenvolvedores ao oferecer uma ampla gama de componentes e utilitários prontos para uso.

Para instalar o Bootstrap:

- npm install @ng-bootstrap/ng-bootstrap
