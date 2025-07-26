// install express mongoose ejs to run this code


const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/company');
const Employees = require('./model/employees');


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})


app.get('/generate', async (req, res) => {
    //Generate random data
   await Employees.deleteMany({})
    for (let index = 0; index < 5; index++) {
        let e = await Employees.create({
            name: ['Saksham', 'Harry', 'Aditya', 'Pranav', 'Harsh', 'Prateek'][Math.floor(Math.random() * 6)],
            salary: Math.floor(Math.random()* 100000),
            language: ['JavaScript', 'Python', 'Java', 'C', 'C++', 'php'][Math.floor(Math.random() * 6)],
            city: ['Agra', 'Kanpur', 'Lucknow', 'Delhi', 'Noida', 'Gurugram'][Math.floor(Math.random() * 6)],
            isManager: Math.random() < 0.5
        });

        //    console.log(e.city);
        console.log(e);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
