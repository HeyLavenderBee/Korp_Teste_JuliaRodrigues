# Sistema de geração de Nota Fiscal - Desafio Korp

Um sistema de gerenciamento de notas fiscais e controle de estoque de produtos.

### Funcionalidades
- Cadastro e gerenciamento de produtos
- Gerenciamento de notas fiscais

### Tecnologias utilizadas
- Angular
- C#
- .NET
- Git
- Typescript
- Figma
- PostgreSQL

### Microserviços
O projeto é separado em dois microserviços, cada um para uma tarefa diferente: *gerenciamento de produtos* e *gerenciamento de notas fiscais*.<br>
Cada microserviço é controlado por uma parte diferente da API C#, e em duas portas diferentes. O de produtos é na porta 7089, e o de notas fiscais é na porta 7027. Eles tratam todas as requisições do site para mostrar os dados, adicionar itens e editar informações.

### Como executar o projeto
Para o projeto poder ser executado na sua máquina, é preciso tanto do frontend quanto o backend rodando ao mesmo tempo (o site e o sistema de API). Aqui está um passo a passo para fazer isso:
- Backend (C#): para rodar a API, abra o Visual Studio 2022 ou 2026, abra o arquivo de solução (NotaFiscalAPI.slnx) dentro da pasta ProdutosAPI que está dentro de backend_csharp. Quando o arquivo for carregado, aperte F5 para iniciar o serviço.
- Banco de Dados: para rodar o banco de dados, abra o PgAdmin e crie dois databases, um para o sistema de nota fiscais, e outro para o sistema de produtos, e nomeie eles respectivamente *notas_fiscais_db* e *produtos_db*. Depois, pegue os arquivos dentro da pasta database que está no projeto, e coloque os comandos de criação de tabela respectivos pra cada banco de dados. Após isso, é só rodar cada script com F5.
- Frontend (Angular): abra a pasta frontend_angular no VSCode, instale as dependências no terminal com `npm install` e inicie a aplicação digitando `npm run start`, também no terminal.
