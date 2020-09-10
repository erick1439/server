import mongoose from 'mongoose';
import { RegisterSchema } from '../Models/Register';

const User = mongoose.model('User', RegisterSchema);

export const deleteContact = (req, res) => {

    User.update(
        { email: req.body.email },
        { $pull: { contacts: { index: req.body.index} } },
        (err, success) => {

            if (err)
                res.send(err);

            else
                res.send(success);
        }
    );
}