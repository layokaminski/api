# Repositório API! :rocket:

# Sumário

- [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [ANTES DE COMEÇAR A DESENVOLVER](#antes-de-começar-a-desenvolver)
- [Guia de tarefas](#guia-de-tarefas)
  - [Lista de Requisitos](#lista-de-requisitos)
    - [1 - Sua aplicação deve ter o endpoint POST `/user`](#1---sua-aplicação-deve-ter-o-endpoint-post-user)


# O que deverá ser desenvolvido

Desenvolver uma API de um CRUD com possibilidades de cadastro de clientes, equipamentos, historico dos equipamentos...

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:layokaminski/api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd api`

2. Instale as dependências [**Caso existam**]
  * `npm install`

# Guia de tarefas

Colocar as principais tarefas para inicio da API:

  1. Criar projeto com docker para poder qualquer desenvolvedor, conseguir ajudar nas mudanças

  2. Configurar principais ações para o desenvolvimento (arquitetura de pastas)

  3. Instalar principais bibliotecas para o desenvolvimento (linter, jest, express, typescript, orm, joi)

  4. Criar rota de cadastro para usuario

## Lista de Requisitos:

### 1 - endpoint POST `/signup`

- O endpoint deve ser capaz de adicionar um novo user a sua tabela no banco de dados;

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "nickname": "layokaminski",
    "email": "layokaminski@email.com",
    "password": "123456",
  }
  ```
- O campo `nickname` deverá ser uma string com no mínimo de 8 caracteres e deve ser único

- O campo `email` será considerado válido se tiver o formato `<prefixo>@<domínio>` e se for único

- A senha deverá conter 6 caracteres no minimo, ter no minimo um número e ter um caracter especial.

- Caso exista uma pessoa com o mesmo email/nickname na base, deve-se retornar o seguinte erro:

  ```json
  {
    "message": "Usuario já existe!"
  }
  ```

- Caso contrário, retornar um token `JWT`:

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
  ```
  _O token anterior é fictício_

 - Além disso, todas as verificações que lembrarem pode ser inseridas para termos um cadastro completo e seguro

