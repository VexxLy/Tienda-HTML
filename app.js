require('dotenv').config();
const express = require('express');
const app = express();//crear una nueva aplicacion express en la variable app
const usersRouter = require('./controllers/users');

const mongoose = require('mongoose');
const path = require('path');
//const url="mongodb+srv://simonfajardo7:simon.-21@bdrestaurant.h4i4gpx.mongodb.net/?retryWrites=true&w=majority"

(async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('Te has conectado a MongoDB')
    }catch(error){
        console.log(error)
    }
})()

//rutas frontend
app.use('/',express.static(path.resolve('views','home')));
app.use('/registro',express.static(path.resolve('views','registro')));
app.use('/login',express.static(path.resolve('views','login')));
app.use('/components',express.static(path.resolve('views','components')));
app.use('/images',express.static(path.resolve('views','img')));
//IMPORTANTE
app.use(express.json());

//rutas backend
app.use('/api/users',usersRouter);

module.exports = app;