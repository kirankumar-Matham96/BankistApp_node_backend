const mongoose = require('mongoose');
require('dotenv').config();

class ConnectToDatabase
{
  connectToDatabase = () =>
  {
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUndefinedTopology: true,
      useFindAndModify: false
    });

    mongoose.connection.once('open', () =>
    {
      console.log('Successfully connected to the database!');
    }).on('error', (err) =>
    {
      console.log(`err ${ err }`);
      process.exit();
    })
  }
}

module.exports = new ConnectToDatabase();