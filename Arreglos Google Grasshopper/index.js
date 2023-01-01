/*
METODOS or METHOD

Los métodos de arreglo son funciones incorporadas en JavaScript, y se pueden usar para modificar arreglos (.push() y .pop()), crear nuevos arreglos a partir de los existentes (.filter() y .slice()) o usar elementos de un arreglo como argumentos para funciones (.forEach()).

the methods array is function to incorporation in javaScript, and can be used to modify arrays (.push() and .pop()), create new arrays from exsiting ones (.filter() and .slice()) or used elements of an array as arguments to functions (.forEach())


drawBox(color) 
Sirve para dibujar un bloque de colores que nosotros definimos
it is used to draw a block of colors that we define

print("") 
Sirve para imprimir ordenes en el navegador
it is used to print orders in the browser

console.log("") 
Al igual que print sirve para imprimir un mensaje en el navegador
Just like print used to print a message in the browser

.slice() 
Toma un punto de partida y uno de final para  tomar valores y crear un nuevo array
Takes a starting point and an ending point to take values ​​and create a new array

.filter() 
Sirve para filtrar elemento dentro de una arreglo que tienen condicienes para ser True.
It is used to filter elements within an array that have conditions to be True.

.forEach() 
Sirve para averiguar el precio mas alto y el mas bajo de una arreglo.
It is used to find out the highest and lowest price of an arrangement.


.includes()
Cuando el método .includes() se aplica a un string (o arreglo), verifica si el valor en sus paréntesis se puede encontrar dentro del string (o arreglo). Devuelve verdadero si encuentra el valor y falso si no lo hace.

when his method .includes() is aplply a string (or array) check if the value in your parenthesescan be find inside to the string ( or array). Return tru if find the value  and false if it doesn't



.indexOf()
Los arreglos y strings tienen un método .indexOf(). El método se adjunta a un arreglo (o string) y luego, verifica cada elemento (o carácter del string). Devolverá el índice del primer elemento que coincide con el argumento. Si no hay coincidencia, devuelve -1.

the array and string have a method .indexOf() the method is attached to array (or string) and then, check each item (or string character).will retrun index of the first element matching the argument. If there is no match it retruns
-1



.lastIndexOf()
El método.lastIndexOf() es lo mismo que el método .indexOf(), salvo que comienza a buscar desde el final del arreglo (o string) en lugar desde el comienzo. Los arreglos y strings tienen un método .lastIndexOf(). El método se adjunta a un arreglo (o string) y luego, verifica cada elemento (o carácter del string) comenzando desde el final. Si encuentra un elemento que es igual al argumento de .lastIndexOf(), entonces devolverá el índice de ese elemento. De lo contrario, devuelve -1.

the .lastIndexOf() method is the same that method .indexOf(),  except that it starts searching from the end to the array (or string) instead from the start. the method is attached to array (or string) and then, check each item ( or string character) starting from the end. if it find an element that is equal to the argument of .lastIndexOf(), then it will retrun the index of that  element. on the contrary, return -1



.pop() = sirve para eliminar el ultimo elemento de un arreglo.
        server for delete the last element in the array
        it is used to remove the last element of an array
.shift()
El método .shift() elimina el elemento al principio de un arreglo. Es como .pop(), pero para el primer elemento en un arreglo en lugar del último.

the .shift() method removes the element at the beginning of an array, its like .pop() but for the first element in an array instead of the last.



.push() = sirve para agregar un nuevo elemento al final de un arreglo
          it is used add new element to the end of an array
.unshift()
El método .unshift() agrega sus argumentos al principio de un arreglo. Es como .push(), pero para el principio de un arreglo en lugar del final.

the .unshift() method  add the argument begin array, its like push() but that bigin the array instead of the end.


.reverse
Cuando el método .reverse() se aplica a un arreglo, invierte el orden de los elementos.

when the .reverse() method applied to an array, it reverse the order of the elements.

.splice()
El método .splice() reemplaza una sección de un arreglo con nuevos elementos. El primer argumento es el índice para comenzar la selección. El segundo argumento es el número de elementos para eliminar el comienzo en el índice (0 si quieres insertar sin reemplazar). Los siguientes argumentos son los nuevos elementos para insertar en el índice (en blanco si solo estás eliminando).

the .splice() method replaces a secccion in the new element array. frist argumenta to index that begin selection, second argument is the element number that deleta the begin index (0 if you want to insert without replaces)



Arrow function

Una función de flecha es una forma compacta de crear una nueva función. Usa () => {} en lugar de la palabra clave function. Tampoco necesita un nombre.

An arrow function is a compact way to create a new function, used () => {} instead the function keyword. you don't need a name either.





Declaración try...catch.

JavaScript incluye una forma integrada de capturar los errores antes de que causen la falla del código. Se llama declaración try...catch.

Una declaración try...catch se ve así:

try {
  // code to run
} catch (e) {
  // code to handle error
}

Es una práctica común utilizar e como el parámetro en el bloque catch. Es la abreviatura de error.

Si algún código dentro del bloque try causa un error, la ejecución del código saltará inmediatamente al bloque catch. El resto del bloque try no se ejecutará.

Esto permite que el código se encargue del error.

Un ejemplo de un buen momento para usar una declaración try...catch es cuando se llama al código de una biblioteca externa.

El siguiente código es un ejemplo del uso adecuado de una declaración try...catch.

import {getIngredients} from 'cookbook';

let recipe = 'potato soup';

try {
  let ingredients = getIngredients(recipe);
  console​.log('There are ' + ingredients​.length + ' ingredients');
  ingredients​.forEach(console​.log);
} catch (e) {
  console​.log(e);
}

Si no hay una receta que se llama ‘potato soup’, ingredients.length causará un error que puede detener la ejecución del código.

Pero dado que el código está en un bloque try, el bloque catch asumirá el control e imprimirá el mensaje de error. Esto impide que el código se rompa.

ingredients.forEach(console.log) no se ejecutará porque el código nunca regresa al bloque try.


*/






