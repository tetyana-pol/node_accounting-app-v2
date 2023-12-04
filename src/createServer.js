'use strict';

const express = require('express');
const { userRouter } = require('./routes/userRouter');
const { expenseRouter } = require('./routes/expenseRouter');
const { resetUsers } = require('./services/userService');
const { resetExpenses } = require('./services/expenseService');

function createServer() {
  const app = express();

  resetUsers();
  resetExpenses();
  app.use(express.json());

  app.use('/users', userRouter);
  app.use('/expenses', expenseRouter);

  return app;
}

module.exports = {
  createServer,
};
