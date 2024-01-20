let rango = 10;
let intentos = 0;
let listaNumerosSorteados = [];

function generarNumeroSecreto(rango) {
    let numeroGenerado = Math.floor(Math.random()*rango + 1);
    
    if (listaNumerosSorteados.length() == rango) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //recursividad
            return generarNumeroSecreto();                             
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            console.log(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorusuario').value); //captamos el valor dentro del input
    
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Asertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //quitamos el atributo disabled al boton
    } else {
        if (numeroUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es mayor')
        } else {
            asignarTextoElemento('p', 'El número secreto es menor')
        }
        intentos++
        limpiarcaja()
    }
}

function limpiarcaja(){
    document.querySelector('#valorusuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Elije un numero del 1 al ${rango}`);
    numeroSecreto = generarNumeroSecreto(rango);
    intentos = 1;
}

function reiniciarJuego() {
    limpiarcaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true') //agregamos atributo disables al boton

}

condicionesIniciales();