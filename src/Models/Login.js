import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const LoginSchema = new Schema({
  email: {
    type: String,
    required: "Enter your email"
  },
  password: {
    type: String,
    required: "Enter your password"
  }
});