const sectionSeleccionarMascota = document.getElementById('elige-gato')
const sectionReiniciar = document.getElementById('reset')
const botonTitulo = document.getElementById('iniciar')
const sectionSeleccionarAtaque = document.getElementById('elige-ataque')
const botonGatoJugador = document.getElementById('botonGato')
const botonMachete = document.getElementById('boton-machete')
const botonDinero = document.getElementById('boton-dinero')
const botonbaile = document.getElementById('boton-baile')
const botonReinicio = document.getElementById('reset')
const sectionPantallaInicio = document.getElementById('Titulo')


const inputMaxwell = document.getElementById('maxwell')
const inputFloppa = document.getElementById('floppa')
const inputMiguel = document.getElementById('miguel')

const SpanGatoJugador = document.getElementById('GatoJugador')
const SpanGatoEnemigo = document.getElementById('GatoEnemigo')

const spanVideasJugador = document.getElementById('VidasJugador')
const spanVideasEnemigo = document.getElementById('VidasEnemigo')

let parrafo = document.createElement('p')

let Gatetes = []

let ataqueJugador
let ataqueEnemigo
let GatoJugador
let GatoEnemigo
let VidasJugador = 10
let VidasEnemigo = 10

// Clases

class Gatete{
    constructor(nombre, foto,vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let maxwell = new Gatete('Maxwell','IMAGES/maxwell-cat.gif',10)

let floppa = new Gatete('Floppa','IMAGES/Floppa.png',10 )

let miguel = new Gatete('Miguel','IMAGES/Michael.png',10)

maxwell.ataques.push(
    {nombre: 'machetazo', id: 'boton-machete'},
    {nombre: 'dinero', id: 'boton-dinero'},
    {nombre: 'baile', id: 'boton-baile'},
)

floppa.ataques.push(
    {nombre: 'machetazo', id: 'boton-machete'},
    {nombre: 'dinero', id: 'boton-dinero'},
    {nombre: 'baile', id: 'boton-baile'},
)

miguel.ataques.push(
    {nombre: 'machetazo', id: 'boton-machete'},
    {nombre: 'dinero', id: 'boton-dinero'},
    {nombre: 'baile', id: 'boton-baile'},
)


function inicarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    
    sectionSeleccionarMascota.style.display = 'none'

    sectionReiniciar.style.display = 'none'

    botonTitulo.addEventListener('click',PantallaTitulo)

    botonGatoJugador.addEventListener('click', seleccionarGatoJugador)

    botonMachete.addEventListener('click',ataqueMachete)

    botonDinero.addEventListener('click',ataqueDinero)

    botonbaile.addEventListener('click',ataqueBaile)

    botonReinicio.addEventListener('click',reiniciarJuego)
}

function ataqueMachete(){
    ataqueJugador = 'Machetazo'
    ataqueAleatorioEnemigo()
}
function ataqueDinero(){
    ataqueJugador = 'Dinero'
    ataqueAleatorioEnemigo()
}
function ataqueBaile(){
    ataqueJugador = 'Baile'
    ataqueAleatorioEnemigo()
}

function PantallaTitulo() {
    
    sectionSeleccionarMascota.style.display = 'block'
    
    sectionPantallaInicio.style.display = 'none'
    
}

function seleccionarGatoJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'

    
    sectionSeleccionarAtaque.style.display = 'block'

    if (inputMaxwell.checked) {
        SpanGatoJugador.innerHTML = 'MAXWELL'
        GatoJugador = 'MAXWELL'
    } 
    else if(inputFloppa.checked){
        SpanGatoJugador.innerHTML = 'FLOOPA'
        GatoJugador = 'FLOOPA'
    }
    else if(inputMiguel.checked){
        SpanGatoJugador.innerHTML = 'MIGUEL'
        GatoJugador = 'MIGUEL'
    }
    else{
        alert('Selecciona una mascota')
    }

    seleccionarGatoEnemigo()
    
}

function seleccionarGatoEnemigo(){
    let Seleccionleatorio = aleatorio(1,3)
    

    if (Seleccionleatorio == 1) {
        SpanGatoEnemigo.innerHTML = 'MAXWELL'
        GatoEnemigo = 'MAXWELL'
    }else if (Seleccionleatorio == 2) {
        SpanGatoEnemigo.innerHTML = 'FLOPPA'
        GatoEnemigo = 'FLOPPA'
    }else{
        SpanGatoEnemigo.innerHTML = 'MIGUEL'
        GatoEnemigo = 'MIGUEL'
    }
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Machetazo'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Dinero'
    }else{
        ataqueEnemigo = 'Baile'
    }

    combate()
}

function combate() {
    

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje('EMPATE')
    }else if (ataqueJugador == 'Machetazo' && ataqueEnemigo == 'Dinero') {
        crearMensaje('TU ATAQUE ES EFECTIVO')
        VidasEnemigo--
        spanVideasEnemigo.innerHTML = VidasEnemigo
    }else if (ataqueJugador == 'Dinero' && ataqueEnemigo == 'Baile') {
        crearMensaje('TU ATAQUE ES EFECTIVO')
        VidasEnemigo--
        spanVideasEnemigo.innerHTML = VidasEnemigo
    }else if (ataqueJugador == 'Baile' && ataqueEnemigo == 'Machetazo') {
        crearMensaje('TU ATAQUE ES EFECTIVO')
        VidasEnemigo--
        spanVideasEnemigo.innerHTML = VidasEnemigo
    }else {
        crearMensaje('RECIBES DAÑO')
        VidasJugador--
        spanVideasJugador.innerHTML = VidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (VidasEnemigo == 0) {
        crearMensajeFinal("VICTORIA")
    }else if (VidasJugador == 0) {
        crearMensajeFinal("DERROTA")
    }

}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu '+ GatoJugador + ' ha usado '+ ataqueJugador + '.  El '+ GatoEnemigo + ' Enemigo ha usado ' + ataqueEnemigo + '. ' + resultado
    
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    
    sectionMensajes.appendChild(parrafo)

    
    botonMachete.disabled = true

    
    botonDinero.disabled = true

    
    botonbaile.disabled = true
    
    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    sectionReiniciar.style.display = 'block'
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', inicarJuego)