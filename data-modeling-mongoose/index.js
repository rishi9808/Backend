const express = require('express')



const port = process.env.PORT || 3000
const app = express()

app.get('/',(req,res) => {
    res.send("Hello world");
    console.log("working");
})

//connect to database
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/firstdb', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("connected to db")
})
.catch((err) => {
    console.log(err)
})


// import User model
const User = require('./models/user')

//create a new user
app.get('/create-user', (req,res) => {
    const user = new User({
        name: 'test',
        email: 'test@gmail.com',
        age: 20,
        website: 'test.com'
    })
    user.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
}
)



app.get('/users', (req,res) => {
    User.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
}
)






app.listen(port, () => {
    console.log("server listening at 3000")
})