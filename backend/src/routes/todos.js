const express = require('express');
const router = express.Router();

// Middleware for validation
const validateTodo = (req, res, next) => {
  const { task } = req.body;
  
  if (!task || typeof task !== 'string' || task.trim().length === 0) {
    return res.status(400).json({ 
      error: 'Please enter a task' 
    });
  }
  
  req.body.task = task.trim();
  next();
};

const createTodoRoutes = (todoService) => {
  router.get('/', async (req, res, next) => {
    try {
      const todos = await todoService.getTodos();
      res.json(todos);
    } catch (error) {
      next(error);
    }
  });

  router.post('/', validateTodo, async (req, res, next) => {
    try {
      const newTodo = await todoService.addTodo(req.body);
      res.status(201).json(newTodo);
    } catch (error) {
      next(error);
    }
  });

  return router;
};

module.exports = createTodoRoutes; 