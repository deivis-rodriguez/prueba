// **************************** arreglos
const arreglos1 = [3.5, "valor", 5, 4, 6]; // arrays
const arreglos2 = [5, "utf", 2, true, 7]; // arrays
/*

//concat
console.log('concat')
var arreglos3 = arreglos1.concat(arreglos2); // unir dos o más arreglos.
console.log(arreglos3);

//join
console.log('join')
console.log(arreglos3.join(', ')) // retorna todos los elementos del arreglo como un string, separados por el el valor que indiquemos

//push
console.log('push')
console.log(arreglos1.push(5)); // agrega un elemento al final del arreglo. retorna la nueva longitud
console.log(arreglos1);

//unshift
console.log('unshift')
console.log(arreglos1.unshift(1.1)); // agrega un elemento al inicio del arreglo. retorna la nueva longitud
console.log(arreglos1);

// pop
console.log('pop')
console.log(arreglos1.pop()); // elimina el ultimo elemento del arreglo y lo retorna
console.log(arreglos1);

// shift
console.log('shift')
console.log(arreglos1.shift()); // elimina el primer elemento del arreglo y lo retorna
console.log(arreglos1);

//slice
console.log('slice')
console.log(arreglos1.slice(1, 3)) // crea un nuevo arreglo a partir de la posición inicial
//indicada hasta el elemento anterior al la posición final indicada.

//splice
// splice(inicio, cantidad, nuevos_elementos)
// elimina el elemento del arreglo que se encuentra en la posicion [inicio]
// y lo retorna. si no se indica la cantidad, eliminará todos los elementos que
// se encuentren a partir de esa posición hasta el final del arreglo.
// el tercer parametro es opcional, si si se indica se ingresará el valor dado
// en la posición [inicio] (pueden ser varios los elementos a agregar)
console.log('splice')
console.log(arreglos1.splice(1, 1, 'nuevo', 'casa'))
console.log(arreglos1)

//reverse
// invierte los elementos
console.log('reverse')
console.log(arreglos1)
console.log(arreglos1.reverse())

// sort
// ordena los elementos
console.log('sort')
console.log(arreglos1)
console.log(arreglos1.sort())
*/

// **************************** objetos
const sexo = 'hombre';
const persona = {
    nombre: 'miguel',
    apellido: 'espitia',
    fechaNacimiento: '03/12/2000',
    sexo
}
let pat = 'patas';
const perro = new Object();

perro.nombre = 'firulay';
perro['raza'] = 'criolla';
perro[pat] = 4;

console.log(persona)
console.log(persona.edad)
console.log(perro)

let personaMap = new Map();

personaMap.get('clave'); // retornar el valor asociado a esa clave
personaMap.set('clave', 'valor') //agregar un par clave:valor al mapa
personaMap.size // retorn cantidad de pares clave:valor que contiene el objeto
personaMap.clear() // elimina todos los pares del map
personaMap.delete('clave') // eliminar registro

//*********************** bucles o ciclos **************************

for (const clave in persona) {
    if (Object.hasOwnProperty.call(persona, clave)) {
        const valor = persona[clave];
        console.log(valor)
    }
}

var i = 0;
while (i == 3) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (i == 3);

export function imprimir(elemento) {
    console.log(elemento)
}

export function suma(a, b) {
    console.log(a + b)
}

export function resta(a, b) {
    console.log(a - b)
}