//lo primero que vamos a hacer es un router
//router: registrar POST, GET, DELETE
const usersRouter = require('express').Router();

//registrar lo que el usuario envie 
usersRouter.post('/',(request,response)=>{
    const {name,email,password} = request.body;
    console.log(name,email,password);
})

module.exports = usersRouter;