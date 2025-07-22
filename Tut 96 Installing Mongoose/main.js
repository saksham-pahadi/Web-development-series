// Explore npm mongodb package by yourself
// YOU need to install Express and  MONGOOSE TO RUN THIS CODE
import mongoose from 'mongoose';
import express from 'express';
import { Todo } from './models/Todo.js';

let conn = await mongoose.connect('mongodb://localhost:27017/todo')

const app = express()
const port = 3000

app.get('/', (req, res) => {
const todo = new Todo({title: 'Learn Mongoose', desc: 'Learn how to use mongoose with Node.js', done: false, days: Math.floor(Math.random() * 10)});
todo.save()
  res.send('Hello World!')
})


app.get('/a',async (req, res) => {
let todos = await Todo.findOne();
  res.json({title: todos.title, desc: todos.desc, done: todos.done, days: todos.days});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})