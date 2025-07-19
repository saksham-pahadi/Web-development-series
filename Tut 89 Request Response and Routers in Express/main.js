// YOU NEED TO INSTALL EXPRESS AND SET UP YOUR NODE ENVIRONMENT TO RUN THIS CODE.

const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')



const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  console.log('Hey its a get request');
  res.send('Hello World!')
}).post('/', (req, res) => {
  console.log('Hey its a post request');
  res.send('Hello World post!')
}).put('/', (req, res) => {
  console.log('Hey its a put request');
  res.send('Hello World put!')
}).delete('/', (req, res) => {
  console.log('Hey its a delete request');
  res.send('Hello World delete!')
})

app.get('/index', (req, res) => {
  console.log('Hey its a get request for index');
  res.sendFile('templates/index.html', { root: __dirname })
})

app.get('/api', (req, res) => {
  res.json({
    name: 'John Doe',
    age: 30,
    city: 'New York'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
