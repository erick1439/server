import mongoose from 'mongoose';
import { RegisterSchema } from '../Models/Register';
import { restart } from 'nodemon';

const User = mongoose.model('User', RegisterSchema);

export const register = (req, res) => {

  User.findOne({
    email:  req.body.email
  }, (err, user) => {

    if (err) 
      res.send(err);

    if (user)
      res.send("This email is already link to an account!");

    else {
      let newUser = new User(req.body);

      newUser.save((err, user) => {
            if (err)
              res.send(err);
      
            res.json(user);
          });
    }

  });
}