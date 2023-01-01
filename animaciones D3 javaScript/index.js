/*
Funciones Biblioteca D3

.attr()
El atributo (.attr()) es una función de la biblioteca D3 que se utiliza para definir el valor de una propiedad específica de una forma SVG.

svg​.append('circle')​.attr('r', 20);
myRectangle​.attr('width', 35);




*/
var circle = svg​.append('circle')
                ​.attr('r', 30)
                ​.attr('fill', 'red');

circle​.on('click', () => {
    circle​.transition()
    ​.attr('r', 400)
    ​.duration(2000);
}); 