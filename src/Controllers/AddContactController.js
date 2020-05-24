import mongoose from 'mongoose';
import { RegisterSchema } from '../Models/Register';

const User = mongoose.model('User', RegisterSchema);

export const addContact = (req, res) => {

    User.updateOne(
        { email: req.body.email }, 
        { $push: { contacts: req.body.contact } },
        (err) => {

            if (err) 
                res.send(err);
                
            res.send("Added");
        }
    ); 
}