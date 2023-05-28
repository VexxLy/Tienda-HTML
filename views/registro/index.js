//console.log("prueba")

const formulario = document.querySelector('#formulario');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#match-input');
const btnRegistro = document.querySelector('#form-btn');

//validamos
//validacion con regex
const emailVal = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const passwordVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm;

let valname = false;
let valpass = false;
let valemail = false;
let valMatch = false;

nameInput.addEventListener('input',e=>{
    //console.log(e.target.value);
    valname = e.target.value;
    if(valname === ''){
        nameInput.classList.remove('outline-red-700','outline-2','outline');
        nameInput.classList.remove('outline-green-700','outline-2','outline');
        nameInput.classList.add('focus:outline-blue-600');
    }else{
        nameInput.classList.remove('focus:outline-blue-600');
        nameInput.classList.add('outline-green-700','outline-2','outline');
    }
})

emailInput.addEventListener('input',e=>{
    //console.log(e.target.value);
    valemail = emailVal.test(e.target.value);
    console.log(valemail)
    validar(emailInput,valemail);
})

passwordInput.addEventListener('input',e=>{
    //console.log(e.target.value);
    valpass = passwordVal.test(e.target.value);
    validar(passwordInput,valpass);
    validar(matchInput,valMatch);
})

matchInput.addEventListener('input',e=>{
    console.log(e.target.value);
    valMatch = e.target.value === passwordInput.value;
    validar(matchInput,valMatch);
    validar(passwordInput,valpass);
})

formulario.addEventListener('submit',e=>{
    e.preventDefault();
    const newUser = {
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }

    console.log(newUser);
    //quedamos aqui
})

const validar = (input,val)=>{
    btnRegistro.disabled = valname && valemail && valpass && valMatch ? false : true;

    if(input.value === ''){
        input.classList.remove('outline-green-700','outline-4','outline');
        input.classList.remove('outline-red-700','outline-4','outline');
        input.classList.add('focus:outline-blue-600');

    }else if(val){
        input.classList.remove('focus:outline-blue-600');
        input.classList.add('outline-green-700','outline-4','outline');
    }else{
        input.classList.remove('focus:outline-blue-600');
        input.classList.remove('outline-green-700','outline-4','outline');
        input.classList.add('outline-red-700','outline-4','outline')
    }
}