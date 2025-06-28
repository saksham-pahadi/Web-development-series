const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about me!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get(`/blog/:slug`, (req, res) => {

// for url http://localhost:3000/blog/intro-to-js?mode=dark&region=in
    console.log(req.params) // output: { slug: 'intro-to-js' }
    console.log(req.query) // output: { mode: 'dark', region: 'in' }
  res.send(`Hello ${req.params.slug}!`)
})
// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Hello intro to js!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Hello intro to python!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
