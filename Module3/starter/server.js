const express = require('express')
const path = require('path')
const app = express()
const port = 4000

app.use(express.static('public'));

// accessing file from outside of public folder
app.get('/', (req, res)=>{
    // res.send('Hello balak!')
    res.sendFile(path.join(__dirname, 'front.html'))
})

// without using path.join
app.get('/about', (req, res)=>{
    res.sendFile(__dirname +'/public/about.html')
})

// with using path.join
app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/shop', (req, res)=>{
    console.log(req.query)
    res.send("Welcome to shop!")
})

// what user is typo in URL we can fetch that info 
app.get('/users/:username', (req, res)=>{
    console.log(req.params)
    res.send("Welcome to the user search!")
})

app.listen(port, (err)=>{
    if(!err){
        console.log(`Server is UP and running on ${port}`);
    }
})