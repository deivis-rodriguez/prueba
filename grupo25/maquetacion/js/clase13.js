// comentario de linea
/*
    comentario de bloque
    podemos comentar varias lineas
*/
// no es necesario que las lineas de codigo terminen con ; pero
// se recomienda hacerlo.

var variable
var variableNombre
console.log(variable); // print(),  System.out.println()
var variable = 5.5;
console.log(variable);

let VARIABLE = 'letra';
const objeto = {
    nombre: 'maria',
    apellido: 'garcia',
    vivo: false
}

variable = "cambie numero por texto";

objeto.apellido = 'fabra';

// tipos de datos
// number: enteros, decimales
// string: cadena de caracteres
// boolean: true o false
// array: conjunto de valores del mismo o diferente tipo
// object: una variable que almacena valores en forma clave: valor
// undefined: variable que no se la ha asignado un valor.

console.log(`2 != '2' => ${2 != '2'}`)
console.log(`2 !== '2' => ${2 !== '2'}`)
variable = new Array(3, 2, 4, 5);
console.log(typeof variable)
console.log(variable instanceof Number)

if (true) {
    let otroMsg = 'buenas tardes!'
    console.log(otroMsg)
    console.log(variable)
}
// console.log(otroMsg) variables que sean declaradas dentro de un bloque de codigo
//solo se pueden usar dentro de ese bloque.

const constante = 50;
VARIABLE = `el valor de constante es: ${constante}`;
console.log(VARIABLE);
//condicionales
if (constante < 40) {
    console.log(constante / 2);
} else {
    console.log(constante - 20);
}

if (constante < 40) {
    console.log(constante + 20);
} else if (constante > 40) {
    console.log(constante - 20);
    if (constante == 50) {
        console.log('terminamos');
    }
} else {
    console.log(constante);
}
var dia = 'martes';
switch (dia) {
    case 'lunes':
        console.log('hoy toca hacer ejercicio');
        break;
    case 'martes':
        console.log('hoy toca ir a mercar');
        break;
    case 'miercoles':
        console.log('hoy toca pagar servicios');
        break;
    case 'jueves':
        console.log('hoy toca llevar a los niños al parque');
        break;
    case 'viernes':
        console.log('hoy toca beber');
        break;
    case 'sabado':
        console.log('hoy toca ir al futbol');
        break;
    case 'domingo':
        console.log('hoy toca ir a misa');
        break;
    default:
        console.log('la semana solo tiene 7 días');
        break;
}

// array
