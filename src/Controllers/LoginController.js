import mongoose from 'mongoose';
import { RegisterSchema } from '../Models/Register';

const User = mongoose.model('User', RegisterSchema);

export const login = (req, res) => {

  User.findOne({
    email: req.body.email,
    password: req.body.password
  }, (err, user) => {

    if (err) 
      res.send(err);

    if (user)
    {
      const response = {firstName : user.firstName,
        lastName : user.lastName,
        email : user.email,
        contacts : user.contacts
      }

      res.json(response);
    }

    else
      res.send("Wrong email or password");
  });
}