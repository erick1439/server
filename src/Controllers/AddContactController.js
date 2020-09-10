import mongoose from 'mongoose';
import { RegisterSchema } from '../Models/Register';

const User = mongoose.model('User', RegisterSchema);

export const addContact = (req, res) => {

    User.update(
        { email: req.body.email }, 
        { $push: { contacts: req.body.newContact } },
        (err, success) => {

            if (err) 
                res.send(err);

            else
                res.send(success);
        }
    ); 
}
