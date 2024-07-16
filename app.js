const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
  })
  
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
  })
  
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html')
  })
  
app.get('/home/apps', (req, res) => {
    res.send('Hello apps!')
  })
app.use(express.static("public"))
  app.get('*', (req, res) => {
    res.send('404')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})