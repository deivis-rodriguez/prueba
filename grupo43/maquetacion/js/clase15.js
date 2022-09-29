// funciones
var dato = 4 + 2;

// funcion general
/*function suma(a, b) {
    let resulta = a + b;
    return resulta;
}*/

// funcion expresion
var suma = function (a, b) {
    return a + b;
}

//arrow function
var resta = (a, b) => {
    return a - b;
}
var alCuadrado = (a) => {
    return a ** 2;
}
var alCuadrado = a => {
    return a * a;
}
var alCuadrado = a => a * a; // se debe recibir un parametro. y es una unica operacion para retornar

var suma = suma(2, 4);
console.log(suma)


// metodos

let persona = {
    nombre: 'maria',
    apellido: 'garcia',
    edad: 23,
    presentacion: function descripcion() {
        return `mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
    },
    nacimiento: function calculoYear() {
        const fecha = new Date();
        const anhoActual = fecha.getFullYear();
        return anhoActual - this.edad;
    }
}

console.log(persona.presentacion())
console.log(persona.nacimiento())


/// ******************* DOM ******************
document.getElementsByTagName('nav')[0].innerHTML = 'teasscadc';

console.log(document.getElementsByClassName('menu-item'));
const lista = document.getElementsByClassName('menu-item');
for(const item of lista){
    console.log(item)
}
console.log(document.getElementById("menu-principal"));

document.querySelectorAll('')

