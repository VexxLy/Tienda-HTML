const navegacion = document.querySelector("#navegacion");

const crearNavHome = ()=>{
    navegacion.innerHTML = `
        <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a class="nav_logo flex items-center justify-center" href="/">
                <img class="nav_logo_img" src="../../img/hella-sin-fondo.png" alt="Hella Store">
            </a>
            
            <!--movil-->
            <svg 
            xmlns="http://www.w3.org/2000/svg"
             fill="none" 
             viewBox="0 0 24 24" 
             stroke-width="1.5" 
             stroke="currentColor" 
             class="w-10 h-10 md:hidden cursor-pointer p-2 hover:bg-emerald-700 rounded-lg text-white">
                <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
              
            <!--escritorio-->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="text-white font-bold hover:bg-emerald-700 py-2 px-4 rounded-lg transition ease-in-out">Ingresar</a>
                <a href="/registro/" class="bg-white text-black font-bold hover:bg-emerald-700 py-2 px-4 rounded-lg transition ease-in-out">Registro</a>
            </div>

            <!--menu movil-->
            <div class="bg-emerald-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center text-center flex-col gap-4 hidden">
                <a href="/login/" class="text-white font-bold hover:bg-emerald-700 py-2 px-4 rounded-lg transition ease-in-out">Ingresar</a>
                <a href="/registro/" class="bg-white text-black font-bold hover:bg-blue-700 py-2 px-4 rounded-lg transition ease-in-out">Registro</a>
            </div>
        </div>
        `
};

const crearNavRegistro = ()=>{
    navegacion.innerHTML = `
        <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <a class="nav_logo flex items-center justify-center" href="/">
                <img class="nav_logo_img" src="../../img/hella-sin-fondo.png" alt="Hella Store">
            </a>
            
            <!--movil-->
            <svg 
            xmlns="http://www.w3.org/2000/svg"
             fill="none" 
             viewBox="0 0 24 24" 
             stroke-width="1.5" 
             stroke="currentColor" 
             class="w-10 h-10 md:hidden cursor-pointer p-2 hover:bg-emerald-700 rounded-lg text-white">
                <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
              
            <!--escritorio-->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="text-white font-bold hover:bg-emerald-700 py-2 px-4 rounded-lg transition ease-in-out">Ingresar</a>
            </div>

            <!--menu movil-->
            <div class="bg-emerald-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center text-center flex-col gap-4 hidden">
                <a href="/login/" class="text-white font-bold hover:bg-emerald-700 py-2 px-4 rounded-lg transition ease-in-out">Ingresar</a>
            </div>
        </div>
        `
};

const crearNavLogin = ()=> {
    navegacion.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
        <a class="nav_logo flex items-center justify-center" href="/">
            <img class="nav_logo_img" src="../../img/hella-sin-fondo.png" alt="Hella Store">
        </a>
        
        <!--movil-->
        <svg 
        xmlns="http://www.w3.org/2000/svg"
         fill="none" 
         viewBox="0 0 24 24" 
         stroke-width="1.5" 
         stroke="currentColor" 
         class="w-10 h-10 md:hidden cursor-pointer p-2 hover:bg-emerald-700 rounded-lg text-white">
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
          
        <!--escritorio-->
        <div class="hidden md:flex flex-row gap-4">
            <a href="/registro/" class="bg-white text-black font-bold hover:bg-emerald-700 py-2 px-4 rounded-lg transition ease-in-out">Registro</a>
        </div>

        <!--menu movil-->
        <div class="bg-emerald-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center text-center flex-col gap-4 hidden">
            <a href="/registro/" class="bg-white text-black font-bold hover:bg-emerald-700 py-2 px-4 rounded-lg transition ease-in-out">Registro</a>
        </div>
    </div>
    `
}
//crearNavHome();

//agregar validaciones
if(window.location.pathname ==='/'){
    //crear barra de navegacion para el home
    crearNavHome();
}else if(window.location.pathname === '/registro/'){
    //crear barra de navegacion para la pagina de registro
    crearNavRegistro();
}else if(window.location.pathname === '/login/'){
     //crear barra de navegacion para la pagina de login
     crearNavLogin();
}

const navBoton = navegacion.children[0].children[1];
//console.log(navBoton)

navBoton.addEventListener('click',e=>{

    const menuMovil = navegacion.children[0].children[3];

    if(!navBoton.classList.contains('activo')){
        //si no contiene la clase activo, agregamos el path de X
        navBoton.classList.add('activo');
        navBoton.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'

        //debemos quitarle hidden
        menuMovil.classList.remove('hidden');
        menuMovil.classList.add('flex');
    }else{
        navBoton.classList.remove('activo');
        navBoton.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
        menuMovil.classList.add('hidden');
        menuMovil.classList.remove('flex');
    }
})



