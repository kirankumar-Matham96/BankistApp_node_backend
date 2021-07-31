const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
  "firstName": {
    type: String,
    require: true,
    validate: /^[A-Z]{1}[A-Za-z]{2,20}/
  },
  "lastName": {
    type: String,
    require: true,
    validate: /^[A-Z]{1}[A-Za-z]{2,20}/
  },
  "email": {
    type: String,
    require: true,
    validate: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  },
  "password": {
    type: String,
    require: true,
    validate: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  }
},
{
  timestamps: true,
  versionKey: false
  });

const schema = mongoose.model('UserSchemaModel', UserSchema);

class userRegistrationAndLogin
{
  registerUser = (userData, callback) =>
  {
    try {

      const user = new schema({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password
      });

      user.save({}, (err, data) =>
      {
        return err ? callback(err, null) : callback(null, data);
      })

    } catch (err) {
      return callback(err, null);
    }

    }

  loginUser = () => {
    
  }
}