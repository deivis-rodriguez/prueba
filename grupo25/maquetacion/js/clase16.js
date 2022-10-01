window.onload = function () {
    // seleccionar elementos por el valor de su atributo id
    /*const elemento = document.getElementById('contenedor-principal')
    console.log(elemento);

    // seleccionar elementos por el nombre de su etiqueta
    const listaH3 = document.getElementsByTagName('h3');
    for (var i = 0; i < listaH3.length; i++) {
        console.log(listaH3.item(i))
        //console.log(listaH3[i])
    }

    // seleccionar elementos por el valor de su atributo name
    // en IE10 (o versiones anteriores) el selector busca por name o id 
    const menu_lateral = document.getElementsByName('menu-lateral')
    console.log(menu_lateral);

    // seleccionar elementos por el valor de su atributo class
    const cards = document.getElementsByClassName('card')
    console.log(cards);

    // seleccionar un elemento utilizando selectores css.
    console.log(document.querySelector('ul.opciones-menu'))

    // seleccionar varios elementos utilizando selectores css
    const secciones = document.querySelectorAll('*[id^="seccion"]')
    console.log(secciones)

    // midificar//crear

    //creamos el elemento
    const parrafo = document.createElement('p');
    //creamos su contenido de texto
    const contenido = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit.');
    //agregamos el contenido al elemento
    parrafo.appendChild(contenido);

    //seleccionamos el elemento que va a contener el nuevo
    const seccion1 = document.querySelector('article section:last-child');

    //agregamos nuestro elemento a su contenedor
    seccion1.appendChild(parrafo)
    //seccion1.style = 'background: red;';
    // innerHTML
    // leer contenido html del elemento
    const cont_s1 = seccion1.innerHTML
    console.log(cont_s1)
    // actualizar contenido html del elemento
    // seccion1.innerHTML += '<ul><li>texto 1</li><li>texto 2</li><li>texto 3</li></ul>';
    console.log(seccion1)

    const text_s1 = seccion1.textContent
    console.log(text_s1)*/

    // seccion1.textContent += '<ul><li>texto 1</li><li>texto 2</li><li>texto 3</li></ul>';

    eventoAgregar();
    eventoEliminar();
}

function eventoAgregar() {
    const lista_btn = document.querySelectorAll('.btn-mas');
    lista_btn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const indice = e.target.value;
            const list_seciones = document.querySelectorAll('article section');
            list_seciones[indice].innerHTML += '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo totam quidem a rerum modi dolores quo quis nesciunt impedit debitis quaerat repellat, neque labore. Ullam laboriosam'
                + 'veniam inventore similique. </p > ';

            const figCaption = document.querySelector('#cont-carrito');
            let contenido = figCaption.textContent;
            if (contenido == '') {
                contenido = 0;
            } else {
                contenido = parseInt(contenido);
            }

            figCaption.textContent = `${contenido + 1}`;

            const contenido_carro = document.querySelector('#contenido_carro');
            console.log(contenido_carro);
            contenido_carro.innerHTML += '<li class=""><div>'+
            '<h6>nombre articulo</h6>'+
            '<img src="">'+
            '<p>descripción</p>'
            '</div></li>';
        })
    })
}

function eventoEliminar() {
    const lista_btn = document.querySelectorAll('.btn-menos');
    lista_btn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const indice = e.target.value;
            const list_seciones = document.querySelectorAll('article section');
            const p = list_seciones[indice].querySelector('p:last-child');
            list_seciones[indice].removeChild(p);

            const figCaption = document.querySelector('#cont-carrito');
            let contenido = figCaption.textContent;
            if (contenido != '') {
                contenido = parseInt(contenido);
                let resta = contenido - 1;
                if (resta <= 0) {
                    figCaption.textContent = ``;
                } else {
                    figCaption.textContent = resta;
                }
            }

        })
    })

}