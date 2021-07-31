const user = require('../controller/user');

module.exports = (app) =>
{
  app.post('/register', user.registerUser);
  app.post('/login', user.login);
}