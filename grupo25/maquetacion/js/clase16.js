window.onload = function () {
    // seleccionar elementos por el valor de su atributo id
    const elemento = document.getElementById('contenedor-principal')
    console.log(elemento);

    // seleccionar elementos por el nombre de su etiqueta
    const listaH3 = document.getElementsByTagName('h3');
    for(var i = 0; i < listaH3.length; i++){
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
}
