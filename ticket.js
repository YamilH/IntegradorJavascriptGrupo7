let totalPagar = document.getElementById('totalPagar');
let estudiante = 0.2;
let trainee = 0.5;
let junior = 0.85;
let ticket = 200;

function multiplicarEntradas(cantidad,ticket){
     let totalDescuento = cantidad*ticket;
     return totalDescuento;
}

function resumen(){
    let cantidad = document.getElementById('cantidad').value;
    let categoria = document.getElementById('categoria').value;
    if (categoria == "estudiante"){
        totalPagar.innerHTML = multiplicarEntradas(cantidad,ticket)*estudiante;
    } 
    else if (categoria == "trainee"){
        totalPagar.innerHTML = multiplicarEntradas(cantidad,ticket)*trainee;
    }
    else if (categoria == "junior"){
        totalPagar.innerHTML = multiplicarEntradas(cantidad,ticket)*junior;
    }
}

function borrar(){ 
    totalPagar.innerHTML = '';
}