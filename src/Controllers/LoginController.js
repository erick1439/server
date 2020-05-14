import mongoose from 'mongoose';
import { LoginSchema } from '../Models/Login';

const Current = mongoose.model('Current', LoginSchema);

export const login = (req, res) => {
  let currentUser = new Current(req.body);

  currentUser.save((err, user) => {
    if (err)
      res.send(err);
      
    // authentication code

    res.send("login successful");
  });
}