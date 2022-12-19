
//Sirve para escribir en consola - JS es case sensitive, que es que es sensible a las mayusculas y minusculas
/*console.log("hola desde un archivo de javascript");

//DOM
let container = document.querySelector(".container");

console.log(container);

let table = document.querySelector(".tabla");

console.log(table);

let tab = document.querySelectorAll("a");

console.log(tab);

tab.forEach(function(link){
    console.log(link);
});
*/

//let celdas = document.querySelectorAll("a");

//celdas.forEach(function(td){
 //   td.addEventListener('click', function(ev){
  //      ev.preventDefault(); // Previene que la funcion haga lo que tiene que hacer
  //      return false;
 //   })
//})

let titulo = document.querySelector("h1");


titulo.addEventListener('click', function(){
    titulo.classList.remove("animate__backInDown");
    titulo.classList.add("animate__wobble");
})







//setInterval(function(){},2000)-- Ayuda a que la funcion se repita constantemente


//setTimeOut(function{},time) -- Ayuda a que las siguientes funciones se realicen despues de cierto tiempo


//Esto nos redirecciona al html anterior
// location.href = "/"



//Nos ayuda a quitar y poner clases
/*
let iconos = document.querySelectorAll("span");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
    icono.classList.add("fa-star")
})*/

/*
Obtener los elementos de la clase .close

let cerrar = document.querySelectorAll(".close");

recorrerlos

cerrar.forEach(function(cl){
    cl.addEventListener('click', function(){
        console.log(this);
    })
})

agregar un evento click a cada uno de ellos

*/

