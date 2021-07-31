'use strict';

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to database


app.get('/', (req, res) =>
{
  res.send({ success: true, message: 'Welcome to Bankist app!' })
})

require('./app/routes/bankist')(app);

app.listen(3000, () =>
{
  console.log('Server started on port 3000');
});