import mongoose from 'mongoose';
import { RegisterSchema } from '../Models/Register';

const User = mongoose.model('User', RegisterSchema);

export const deleteContact = (req, res) => {

    User.updateOne(
        { email: req.body.email },
        { $pull: { contacts: { index: req.body.index} } },
        (err) => {

            if (err)
                res.send(err);

            res.send("Deleted");
        }
    );
}