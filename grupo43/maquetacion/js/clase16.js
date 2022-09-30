
/// ******************* DOM ******************
window.onload = function () {

    //seleccionar elementos del DOM
    let h3s = document.getElementsByTagName('h3');

    for (let i = 0; i < h3s.length; i++) {
        console.log(h3s[i]);
        //console.log(h3s.item(i));
    }

    let menu = document.getElementsByName('menu');
    console.log(menu);

    let divs = document.getElementsByClassName('d-flex');
    console.log(divs);

    const span = document.getElementById('menu-principal').querySelector('span');
    console.log(span);

    const elemento = document.querySelector('.dropdown-contenido');
    console.log(elemento);

    const lista_elementos = document.querySelectorAll('*[class^="dropdown"]')
    console.log(lista_elementos);


    // agregar o modifcar
    //crear elemento



    //seleccionamos los botones
    const btnsPlus = document.querySelectorAll('button[id^="btn-addParrafo-"]');
    //recorremos el arreglo resultante
    btnsPlus.forEach((btn) => {
        //agregamos un event listener a los botones
        btn.addEventListener('click', (evento) => {
            //acciones a ejecutar cuando se le de click a un boton
            //creamos un selector dependiendo de a que sección pertenece el botón
            const idSection = `seccion-${evento.target.value}`;
            //creamos el nuevo parrafo
            let parrafo = document.createElement('p');
            //creamos el texto que contiene el parrafo
            const textoParrafo = document.createTextNode("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, error minus? Labore recusandae tempore nam sed reprehenderit numquam praesentium similique, suscipit rerum, voluptatem dolor ab. Facilis cum iusto nam quis!");
            //agregamos el texto al parrafo
            parrafo.appendChild(textoParrafo);
            // Agregamos el parrafo a la sección
            document.getElementById(idSection).appendChild(parrafo)
        })

    })
    const btnsMenos = document.querySelectorAll('button[id^="btn-delParrafo-"]');
    btnsMenos.forEach((btn) => {
        btn.addEventListener('click', (evento) => {
            const idSection = `seccion-${evento.target.value}`;
            const parrafos = document.getElementById(idSection).getElementsByTagName('p');
            console.log(parrafos)
            //p.parentNode.removeChild(p)
            const indiceUltimo = parrafos.length - 1;
            console.log(indiceUltimo)
            if (indiceUltimo >= 0) {
                document.getElementById(idSection).removeChild(parrafos[indiceUltimo]);
            }
        })
    })

    /*
    const contenido = document.getElementById('seccion-1').innerHTML;
    console.log(contenido)
    span.innerText = 'texto';
    document.getElementById('seccion-1').innerHTML += '<ul><li>item1</li><li>item2</li><li>item3</li></ul>';
    console.log(document.getElementById('seccion-1').innerText)
    */

    //



}

function sumar() {
    const valor1 = document.getElementById('valor1');
    const valor2 = document.getElementById('valor2');
    alert('mensaje');
    document.getElementById('resultado').value = parseInt(valor1.value) + parseInt(valor2.value);
}
