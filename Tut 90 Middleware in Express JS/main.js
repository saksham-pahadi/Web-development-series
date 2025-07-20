//YOU NEED TO INSTALL EXPRESS TO RUN THIS CODE
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const birds = require('./routes/birds')



app.use(express.static('public'))
app.use(express.json());


app.use('/birds', birds)

// middleware 1 logger for our application
app.use((req, res, next) => {
    // console.log(req.headers);
    req.saksham="I am saksham";
    fs.appendFileSync('logs.txt', `\n${Date.now()} is a ${req.method}`);
    console.log(`${Date.now()} is a ${req.method}`)
    next() // Call next middleware or route handler
});


// middleware 2
app.use((req, res, next) => {
    console.log('Middleware 2 is running')
    next() // Call next middleware or route handler
});

app.get('/', (req, res) => {
    res.send('Hello World!' + req.saksham);
})

app.get('/about', (req, res) => {
    res.send('Hello about!')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
