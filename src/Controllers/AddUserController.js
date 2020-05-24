import mongoose from 'mongoose';
import { RegisterSchema } from '../Models/Register';

const User = mongoose.model('User', RegisterSchema);

export const addUser = (req, res) => {

    User.updateOne(
        { email: req.body.email }, 
        { $push: { contacts: req.body.contact } },
        () => {
            res.send("Done");
        }
    ); 
}