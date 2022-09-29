// arreglos / arrays


a1 = [4];
console.log(a1);
a2 = [2, 3, 4, 5];
a3 = Array(4);
console.log(a3);
a4 = new Array();

let arreglo = [4, 3, 4, 5, 6]
console.log(arreglo)
console.log(`tamaño del arreglo ${arreglo.length}`)
console.log(arreglo.push(1)) // agregar un elemento al final
console.log(arreglo)
let fecha = [2022, '04', 20]
console.log(fecha.join('/')) // concatenar los elementos del arreglo en un string
arreglo.pop() // eliminar el ultimo
console.log(arreglo)
arreglo.splice(2, 1) // splice(posicion, cantidad, ...valores) 
// elimina la cantidad de elementos <cantidad> a partir de <posicion>
// y opcionalmento los reemplaza por <...valores>
console.log(arreglo)
arreglo.unshift(2) // agrega al principio
console.log(arreglo)
arreglo.shift() // elimina al principio
console.log(arreglo)
//
let newArray = arreglo.concat(a2); // unir 1 o más arreglos
console.log(newArray)
let porcion = newArray.slice(3, 5); // retorna una porción del arreglo
console.log(porcion)
console.log(newArray.reverse()) //invierte la ubicación de los elementos dentro del arreglo
console.log(newArray.sort()) // ordenar el arreglo
console.log(newArray.indexOf(4)) // indice de la primera ocurrencia del valor buscado
console.log(newArray.lastIndexOf(4)) // indice de la ultima ocurrencia del valor buscado
console.log(arreglo.toString()) // convierte a string el arreglo

// objetos
let edad = 43;

let persona = {
    nombre: 'margarita',
    apellido: 'florez',
    edad,
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
    ]
}


console.log(persona)


perro = new Object();
perro.color = 'negro';
perro['raza'] = 'labrador';

console.log(perro)


console.log(persona.genero) // se el atributo no pertenece al objeto, retorna undefined

const persona2 = new Map();
persona2.set('nombre', 'andrea');
persona2.set('apellido', 'fuentes');

console.log(persona2.get('apellido'))
persona2.delete('nombre')
console.log(persona2)
console.log(persona2.size)

// ciclos
// for

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i)

}

console.log(arreglo)
for (const elemento of arreglo) {
    console.log(elemento)
}

for (const indice in arreglo) {
    console.log(arreglo[indice])
}

for (const atributo in persona) {
    console.log(persona[atributo])
}

for (const atributo in persona) {
    if (Object.hasOwnProperty.call(persona, atributo)) {
        const element = persona[atributo];
        console.log(element)

    }
}

// while
var i = 10;
while (i < 5) {
    console.log('dentro del while');
    i++;
}
console.log('fuera del while');

// do-while
do {
    console.log('dentro del do-while');
} while (i < 5);
console.log('fuera del do-while');


function suma() {

    const numero1 = document.getElementById("numero1");
    const numero2 = document.getElementById("numero2");

    if (numero1.value == '') {
        alert('el campo no puede quedar vacio')
    }
    let suma = parseInt(numero1.value, 10) + parseInt(numero2.value, 10)

    document.getElementById('resultado').value = suma;

}