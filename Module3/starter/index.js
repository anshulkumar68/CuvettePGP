const express = require('express')
const path = require('path')
const app = express()
const port = 3001

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'new', 'index.html'))
})

app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`);
})