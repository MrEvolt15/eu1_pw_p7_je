var profesor = {
    cedula: "",
    nombre: "",
    apellido: "",
};

function comprobarUno() {
    let cedula = document.getElementById('cedula').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    console.log(cedula);
    console.log(nombre);
    console.log(apellido);
    if (cedula.length === 0) {
        document.getElementById('alerta').innerText = "Campo cedula vacio";
        
    } else if (nombre.length === 0) {
        document.getElementById('alerta').innerText = "Campo nombre vacio";
        
    } else if (apellido.length === 0) {
        document.getElementById('alerta').innerText = "Campo apellido vacio";
    }
}
function crearProfesorForm() {
    comprobarUno();
    this.profesor.cedula = document.getElementById('cedula').value;
    this.profesor.nombre = document.getElementById('nombre').value;
    this.profesor.apellido = document.getElementById('apellido').value;
    document.getElementById('textoJson').value = JSON.stringify(this.profesor);
}
function crearProfesorJson(){
    let profesorTexto = document.getElementById('textoJson').innerText;
    this.profesor = JSON.parse(profesorTexto)
    
}
function comprobarDos(profesor){
    if (profesor.cedula.length === 0) {
        document.getElementById('alerta').innerText = "Atributo cedula vacio";
        
    } else if (profesor.nombre.length === 0) {
        document.getElementById('alerta').innerText = "Atributo nombre vacio";
        
    } else if (profesor.apellido.length === 0) {
        document.getElementById('alerta').innerText = "Atributo apellido vacio";
    }
}
function pulsarBotonGuardar() {
    crearProfesorForm();
    comprobarUno();
}
function pulsarBotonJson(){
    crearProfesorJson();
    comprobarDos(this.profesor);
    document.getElementById('alerta').value ="";
    console.log(this.profesor)
}