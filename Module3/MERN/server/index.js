const express = require('express')
const mongoose = require('mongoose')
const User = require('./model/user')
const bcrypt = require("bcrypt");
const cors = require('cors')
const app = express()
const port = 3000;
app.use(express.json())
app.use(cors())

mongoose
  .connect("mongodb+srv://anshul:hardwork@schooldata.xbidd.mongodb.net/schoolData")
  .then((data) => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    res.status(500).json({ message: "connection interrupted" });
  });

  app.get('/register/check', (req, res)=>{
    res.json('API is working fine')
  })

//   for adding a user info
app.post('/register',async (req, res)=>{
    const {username, email, password} = req.body;
    const checkUser = await User.findOne({email})
    if(checkUser){
        return res.status(400).json({message : 'user already exist'})
    }
    const hashedPass = await bcrypt.hash(password, 10)
    const newUser = new User({
      username,
      email,
      password: hashedPass
    });
    await newUser.save()
    res.json('User created successfully')
})

// for logging into page
app.post('/login',async(req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message:"user not found, please signup"})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        return res.status(400).json({message: "incorrect password"})
    }
    return res.json({message: "Login successfully"})
})

app.listen(3000, ()=>{
    console.log(`server is up and running on ${port}`)
})