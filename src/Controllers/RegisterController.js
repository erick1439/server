import mongoose from 'mongoose';
import { RegisterSchema } from '../Models/Register';

const User = mongoose.model('User', RegisterSchema);

export const register = (req, res) => {

  User.findOne({
    email:  req.body.email
  }, (err, user) => {

    if (err) 
      res.send(err);

    if (user)
      res.send("User already exits");

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