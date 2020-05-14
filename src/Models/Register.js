import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RegisterSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter your first name"
  },
  lastName: {
    type: String,
    required: "Enter your last name"
  },
  email: {
    type: String,
    required: "Enter your email"
  },
  password: {
    type: String,
    required: "Enter your password"
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
