# Sistema de geração de Nota Fiscal - Desafio Korp

Um sistema de gerenciamento de notas fiscais e controle de estoque de produtos.

### Funcionalidades
- Cadastro e gerenciamento de produtos
- Gerenciamento de notas fiscais

### Tecnologias utilizadas
- Angular
- C#
- Git
- Typescript
- Figma
- PostgreSQL

### Microserviços
O projeto é separado em dois microserviços, cada um para uma tarefa diferente: *gerenciamento de produtos* e *gerenciamento de notas fiscais*.<br>
Cada microserviço é controlado por uma parte diferente da API C#, e em duas portas diferentes. O de produtos é na porta 7089, e o de notas fiscais é na porta 7027. Eles tratam todas as requisições do site para mostrar os dados, adicionar itens e editar informações.

### Como executar o projeto
Para o projeto poder ser executado na sua máquina, é preciso tanto do frontend quanto o backend rodando ao mesmo tempo (o site e o sistema de API). Aqui está um passo a passo para fazer isso:
- Backend (C#): para rodar a API, abra o Visual Studio 2022 ou 2026, abra o arquivo de solução (NotaFiscalAPI.slnx) dentro da pasta backend_csharp, e aperte F5 para iniciar o serviço.
- Frontend (Angular): abra a pasta frontend no VSCode, instale as dependências no terminal com `npm install` e inicie a aplicação digitando `npm run start`, também no terminal.
