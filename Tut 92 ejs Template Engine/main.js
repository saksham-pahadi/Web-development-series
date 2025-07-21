// YOU NEED TO RUN npm install ejs express
// This code sets up a simple Express server that uses EJS as the templating engine.
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Addidas"
    let searchText = "Search for the products"
    let arr = ["hello", 54, 67, 89, 23, 45, 67, 89, 12, 34];
    res.render("index", { siteName: siteName, searchText: searchText, arr })
})

app.get('/bolg/:slug', (req, res) => {
    let blogTitle = "Addidas when and why?"
    let blogContent = "Its a very good brand"
    res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
