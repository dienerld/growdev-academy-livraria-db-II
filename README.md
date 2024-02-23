# Api Livraria

Primeira projeto de API integrada com banco de dados, utilizando Node.js, Express e Prisma.

Projeto desenvolvido durante as aulas do módulo de Banco de dados II da 16ª edição do Programa de Formação Full Stack Web da [Growdev](https://growdev.com.br).

O Objetivo do projeto é criar uma API para uma livraria, onde é possível cadastrar, listar, buscar, atualizar e excluir autores e livros. Visando a prática de integração com banco de dados por parte dos alunos e reforçar conceitos de APIs Rest.

## Funcionalidades

### Autores

- [x] Cadastro de autores
- [x] Listagem de autores
- [x] Busca de autores por id
- [x] Atualização de autores
- [x] Exclusão de autores

### Livros

- [x] Cadastro de livros
- [x] Listagem de livros
- [x] Busca de livros por id
- [x] Atualização de livros
- [x] Exclusão de livros

## Tecnologias

- Node.js
- Express
- Prisma
- SQLite

## Como rodar o projeto

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Rode as migrações com `npx prisma migrate dev`
4. Inicie o servidor com `npm run dev`

## Rotas

### Autores

- `GET /authors`: lista todos os autores
- `GET /authors/:id`: busca um autor por id
- `POST /authors`: cadastra um novo autor
- `PUT /authors/:id`: atualiza um autor
- `DELETE /authors/:id`: exclui um autor

### Livros

- `GET /books`: lista todos os livros
- `GET /books/:id`: busca um livro por id
- `POST /books`: cadastra um novo livro
- `PUT /books/:id`: atualiza um livro
- `DELETE /books/:id`: exclui um livro

---

Feito por [Diener Dornelas](https://github.com/dienerld)
