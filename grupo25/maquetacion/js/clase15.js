//funciones
console.log(valor)
console.log(suma(3, 4));
var valor = 43;

function suma(a, b) {
    let resultado = a + b;
    return resultado;
}

var resta = function (a, b) {
    return a - b;
}

var resta = (a, b) => {
    return a - b;
}

var resta = (a, b) => a - b;

var potenciacion = a => a ** 2;

var hola = () => alert("hola");

console.log(resta(1, 2))

const arreglo = [1, 2, 31, 3, 2, 10, 11]
let resultado = 0;

arreglo.forEach((elemento) => {
    resultado += elemento;
})

console.log(resultado)

//metodos

let persona = {
    nombre: 'margarita',
    apellido: 'florez',
    edad: 23,
    telefono: '765432',
    direcciones: [
        {
            calle: '32',
            numero: '54-32',
            complementa: 'conjunto residencial x'
        }, {
            calle: '32',
            numero: '54-32',
            complementa: 'conjunto residencial x'
        }
    ],
    presentacion: function () {
        return `hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
    },
    suma: suma(3,1)
}

console.log(persona.presentacion())
console.log(persona.suma)
