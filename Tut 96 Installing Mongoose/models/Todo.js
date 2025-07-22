import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  done: Boolean,
  days: Number
});

export const Todo = mongoose.model('KTodo', TodoSchema);