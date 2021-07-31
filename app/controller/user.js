const service = require('../service/user');

class userRegistrationAndLogin
{
  registerUser = (req,res) =>
  {
    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    }
    service.userRegister(userData, (err, data) =>
    {
      err ? res.status(500).send({ success: false, message: err.message || 'something went wrong!' })
        : res.status(200).send({ success: true, message: "user registered successfully", data: data });
    });
  }
}
