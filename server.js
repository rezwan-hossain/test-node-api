const express = require('express');
const app = express();
const mongoose = require('mongoose');
//import router 
const authRoute= require('./routes/auth');

mongoose.connect('mongodb+srv://rezwan:rezwan@cluster0.8ydox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log('database in connected')
        })
        .catch((err)=>{
            console.log(err)
        })


//body parser
app.use(express.json());
//router middlewere
app.use('/api/user', authRoute);


app.listen(8080, ()=>{
    console.log('server in running in port 8080')
});