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
      res.json(user);

    else
      res.send("Wrong email or password");

  });
}