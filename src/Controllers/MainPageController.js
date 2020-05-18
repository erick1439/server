import mongoose from 'mongoose';
import { RegisterSchema } from '../Models/Register';

const User = mongoose.model('User', RegisterSchema);

export const addContact = (req, res) => {

    // User.update({
    //     $push: {contacts: }
    // })

};