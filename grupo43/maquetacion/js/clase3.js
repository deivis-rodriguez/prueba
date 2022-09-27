var bool = true; // boolean
let numero = 3; // number
const valor = 'texto'; // string '' "" `texto ${nombre_variable}`
const arreglos = [3.5, "valor", 5, 4, 6]; // arrays
const objetos = { "clave1": 4, "clave2": 5 }; // object
var indifinido;

indifinido = "esto es un texto";
numero = 6;
console.log(numero);
console.log(valor);
console.log(bool);
console.log(arreglos);
console.log(objetos);
console.log(indifinido);
indifinido = 123;
console.log(indifinido);

console.log(`el valor de esta variable es ${valor}`);

//sumas
console.log(3 + 4);
console.log(3 + "4");
//restas
console.log(3 - 4);
//multiplicación
console.log(3 * 4);
//potencia
console.log(3 ** 4);
//división
console.log(3 / 4);
//modulo
console.log(3 % 4);
//incremento
var i = 3;
//primero se utilice el valor actual de la variable
//y después se incremente, variable++
console.log(i++);
//primero se incremente el valor actual de la variable
//y después se utilice, ++variable
//decremento
console.log(++i);

console.log(i--);
console.log(i);

i += 4; // i= i + 4;
console.log(i);
console.log(`2=='2' => ${2 == '2'}`);
console.log(`2==='2' => ${2 === '2'}`);
console.log(typeof objetos);
console.log(arreglos instanceof Number);

//if simple
if (arreglos instanceof Number) {
    console.log('es una instancia de numero')
}

//if con else
if (arreglos instanceof Number) {
    console.log('es una instancia de numero');
} else {
    console.log('no es una instancia de numero');
}

// if ternario
//var v1 = condicion ? retorna_caso_true : retorna_caso_false; 

console.log((arreglos instanceof Number) ? 'es una instancia de numero' : 'no es una instancia de numero');

//else if
if (arreglos instanceof Number) {
    console.log('es una instancia de numero');
} else if (arreglos instanceof Array) {
    console.log('es una instancia de arreglo');
} else {
    console.log('no es una instancia de numero');
}

//switch
var mes = 'abril';
switch (mes) {
    case 'enero':
        console.log('estamos en enero');
        break;
    case 'febrero':
        console.log('estamos en enero');
        break;
    default:
        console.log('mes no existe');
}

// ciclos
const array = [2, 4, 1, 5, 6, 8];
for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
}
// para iterar los indices del arreglo
console.log('indice');
for (const indice in array) {
    console.log(indice);
    console.log(array[indice]);
}

// para iterar los valores del arreglo
console.log('valor');
for (const numero of array) {
    console.log(numero);
}

/* comentarios de bloques de lineas
function funcion(){
    let v1;
}
*/