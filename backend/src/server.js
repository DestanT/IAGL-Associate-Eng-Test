const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);
const createTodoRoutes = require('./routes/todos');

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.use('/api/todo', createTodoRoutes(todoService));

  return server;
};
module.exports = server;