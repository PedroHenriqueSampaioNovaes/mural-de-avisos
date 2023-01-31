# Mural de Avisos
Projeto criado no curso de NODE.JS para desenvolver uma aplicação focada na criação de uma API para o front-end se comunicar com o back-end.
A ideia do projeto é de se comunicar com o back-end através do front-end para retornar ao usuário os avisos já criados, além de, claro, poder criar novos avisos e mostrá-los na tela.

## Processo de desenvolvimento
- Foi importado o módulo express para facilitar a criação de rotas, além de criar um servidor local na porta 3000 para poder executar a aplicação.
- Em seguida criei as rotas para os caminhos api/all e api/new. Quando a rota /all é requisitada, ela retorna um objeto JSON contendo o id, título e descrição da postagem, sendo convertido em objeto javascript.
Enquanto a rota /new é acionada para adicionar uma nova postagem dentro do nosso objeto posts (armazena as informações de todas postagens), recebendo o título e a descrição passada
pelo usuário, e então criando um id aleatório.
- E dentro do script.js que se encontra no caminho public/scripts do projeto, executa-se o algoritmo responsável por acionar essas API's quando necessário.
