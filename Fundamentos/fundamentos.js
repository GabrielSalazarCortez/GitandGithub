/* 
PROPIEDADES DE JAVASCRIPT

.length = para verificar el total de caracteres en un string o el numero de arreglos en un elemento.
.inclides = se puede utilizar verificar si hay palabras especificas en un string
.replace = se utiliza para encontrar una primer valor y cambiarla con el segundo valor ("1****", "2*****")
var = sirve para declara una variable global en todo el codigo
let = solo sireve dentro de la funcion que se la convoque
return = indica que una funcion deje de ejecutarse y devuelva un valor
import = sirve para usar un codigo que esta almacenado en otro lugar


METODOS
.pop() = sirve para eliminar el ultimo elemento de un arreglo.
drawBox(color) = sirve para dibujar un bloque de colores que nosotros definimos
print("") = sireve para imprimir ordenes en el navegador
console.log("") al igual que print sirve para imprimir un mensaje en el navegador
.push() = sirve para agregar un nuevo elemento al final de un arreglo
.slice() = toma un punto de partida y uno de final para  tomar valores y crear un nuevo arreglo, la forma de comenzar a contar un arreglo comienza en 0
.filter() = sirve para filtrar elemento dentro de una arreglo que tienen condicienes para ser True.
.forEach() = sirve para averiguar el precio mas alto y el mas bajo de una arreglo.


CONDICIONANTES
 if
 else if
 else
 while
 for

 OPERADOR DE PROGRAMACION

 ... = sirve para copiar todos los elementos que tenga un arreglo en otro arreglo

 OPERADORES TERNARIOS ? :
 EXAMPLE
var train = 3
var car =2
train > car ? print("Drive a car") : print ("Go on vacation")

result print("Drive a car")

OPERADORE DE INCREMENTO Y DECREMENTO +1
++, --

COMPARACIONES
&&   Compara si dos elementos son verdaderos, si ambos son verdaderos devolvera true
||    Comprara si uno de los elementos es verdadero, si uno es verdadero devolvera true


ASIGNACION DE SUMA Y RESTA
+=; = para aunmentar la cantidad que queremos a nuestra variable
-=; = para disminuir la cantidad que queremos a nuestra variable
EJEMPLO 
let x = 3;
x += 2;
print(x)
new x = 5




Entrevistas

Al resolver un problema con funciones, por lo general, es bueno comenzar por pensar "¿cuál es la entrada?" y "¿cuál es la salida?"

La entrada es la información que la función necesita para responder a la pregunta que preguntas.


input and output

the input is the information we need for recover the question

the output is a answer to question

Por lo general, el código se puede desglosar en varios componentes o funciones.
A veces, puede ser útil crear primero estas funciones individuales por separado y luego, reunirlos en una función más grande.
Estas funciones de componentes más pequeñas pueden llamarse funciones asistentes.

FUNCION ASISITENTE

function bigFunction (price1, price2) {
    let total = price1 + price2
    return tax(total)
}
En el código anterior, tax() es la función asistente.



Solo hay 6 valores falsy en JavaScript. Todo lo demás es truthy. Los 6 valores falsy son:

false: el valor boolean false

0: el número 0

'': Un string vacío

NaN: que significa “Not a Number” (no es un número), y generalmente es producto de errores matemáticos

undefined: el valor de una variable antes de que se le haya asignado un valor

null: un valor en blanco que se puede asignar a una variable

los demas son verdaderos.



EXAMPLES


Funcion de iteracion con prueba verdadero o falso

import { testResults } from 'grasshopper.laboratory';
function check(results, ___) {    declaracion de funcion
  for (var i of results) {    iteracion de un elemto en el parametro de la funcion
    if (i === 'fail') {   consulta de resultado de iteracion actual es igual al valor deignado
      return 'fail';        retorno en caso de ser verdad nuestra pregunta
    }
  }
  return results.length + ' tests passed';   retorno en caso de tener otro valor difernte a "fail" con una concatenacion de string
};
console.log(check(testResults));  con toda la logica de nuestra funcion consultar mediante check(testResults) los resultados importados.





Funcion que agarra un arreglo y los suma entre si


function sum(numberArray, ___) {
  let num = 0;
  for (var i of numberArray) {
    num += i;
  }
  return num;
};
console.log(sum(shape));




Funcion para cambiar o renombrar el ultimo elemento de un arreglo


import { shapes } from 'grasshopper.shapes';     mediante import traemos un arreglo: shape
function setLastValue(value, string, ___) {      creamos nuestra funcion  con dos parametro, una para almacenar nuestro el arreglo y el otro para renombrar el ultimo elemento de nuestro arreglo
  let lastValue = value.length - 1;              creamos una nueva variable que esea igual al ultimo elemento de nuestro arreglo con el (value.length - 1)
  value[lastValue] = string;                     remplazamos el valor especifico de una elemento en un arreglo con el siguiente ejemplo xxx[] y lo igualamos a nuestro segundo parametro para cambiarlo por el que nosotros deseemos
  };
setLastValue(shapes, 'hexagon');                se llama nuestra funcion asignando el arreglo a nuestro primer parametro y asginando al segundo parametro el nuevo elemento que queremos renombrar
for (let item of shapes) {                      llamamos a un ciclo for para iterar los elementos de nuestro arreglo (shapes)
  console.log(item);                            y llamamos la funcion console.log(itmes) con los elementos iterados 
}




función que tome un arreglo y un índice, y devuelve el elemento vecino al índice


import { array, index } from 'grasshopper.arrayFactory';
function getNeighbor(arr, i, ___) {
  let neighborIndex = i + 1;
  return arr[neighborIndex];
};
console.log('The neighbor to ' + array[index] + ' is ' + getNeighbor(array, index));





Un classic for loop tiene tres componentes:

La variable iterativa y el valor inicial: let i = 0
La prueba para determinar si el ciclo debe seguir ciclando: i < 10
Y cómo debe cambiar la variable iterativa después de cada ciclo: i++

Al acceder a los elementos de un arreglo vecino en un classic for loop, es importante establecer un comienzo correcto o punto final para el ciclo.

Por ejemplo, el siguiente classic for loop tiene un error:
for (let i = 0; i < array​.length; i++) {
    let neighborIndex = i + 1
    console​.log(array[neighborIndex]);
}
Si hubiera 7 elementos en el arreglo, ¿qué sucedería cuando i es 6?

Recuerda, la indexación de arreglo comienza en 0.
La declaración console.log() intentaría imprimir array[7], que no existe. En cambio, imprimiría indefinido.

Para evitar esto, haz que el classic for loop deje de ciclar 1 elemento antes:

for (let i = 0; i < array​.length - 1; i++) {
    let neighborIndex= i + 1
    console​.log(array[neighborIndex]);
}



Si el código dentro de un classic for loop verifica los elementos vecinos antes del índice actual, asegúrate de que el ciclo no comience en 0.

Por ejemplo:

for (let i = 1; i < array​.length; i++) {
    neighborBefore = i - 1
    console​.log(array[neighborBefore]);
}
En este ejemplo, i inicialmente está definido en 1. Esto significa que console.log(array[i - 1]) imprime el elemento en el índice 0.

Si i estuviera definido en 0, entonces console.log(array[i - 1]) intentaría imprimir el elemento en el índice -1, que no existe (los índices de arreglo no pueden ser negativos).




Y, al igual que los arreglos, si accedes a caracteres vecinos durante el ciclado por un string, debes ajustar el comienzo o punto final del ciclo en consecuencia.
Por ejemplo, si usas i - 1 dentro de un ciclo, entonces el ciclo debe comenzar en el segundo carácter.

for (let i = 1; i < 'fruit'​.length; i++){
  let neighborIndex = i - 1
  console​.log('fruit'[i])
  console​.log('fruit'[neighborIndex])
}
Si usas i + 1 dentro de un ciclo, entonces el ciclo debe terminar en el penúltimo carácter.

for (let i = 0; i < 'fruit'​.length - 1; i++){
  let neighborIndex = i + 1
  console​.log('fruit'[i])
  console​.log('fruit'[neighborIndex])
}




función que toma un string y usa un classic for loop para imprimir cada uno de sus caracteres.

function printCharacters(string, ___) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
};
printCharacters('Gabriel'edit);




La diferencia clave entre la notación por puntos y la notación de corchete es que las variables se pueden usar dentro de la notación de corchete, siempre que la variable consulte un string.

Una variable que se usa dentro de una notación de corchete debe consultar un string o, de lo contrario, será indefinida.

Notacion por punto
let cat = {
	name: 'Moo',
	age: 4
}

console​.log(cat​.name);


Notacion por corchete
let cat = {
	name: 'Moo',
	age: 4
}

console​.log(cat['name'])




Las propiedades también se pueden usar mediante la notación de corchete.

Por ejemplo, creemos un object vacío llamado animal:

let animal = {};
Actualmente, este object no contiene ninguna propiedad.

Sin embargo, la notación de corchete (y la notación por puntos) se puede usar para crear propiedades. Agreguemos una propiedad llamada type a animal:

animal['type'] = 'Super Furry';
¿Cómo se puede agregar la propiedad age a dog?
let dog = {
    name: 'Gruff'
};
dog['age'] = 6



ciclo For loop tendrá una propiedad nombrada para cada carácter en un string, y cada propiedad almacena el índice donde aparece el carácter.

import { obj, string } from 'grasshopper.data';
for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  obj[letter] = i;
}
for (let property in obj) {
  console.log(property + ': ' + obj[property]);
}
> r: 0
> a: 1
> d: 2
> i: 3
> o: 4

El pensamiento computacional se trata de enmarcar problemas reales de modo que las computadoras puedan resolverlos, y es una forma útil de llegar a una solución al enfrentar un desafío.



Se requiere mostrar los nombres de todos los estudiantes que necesitan un boleto de adulto para el museo.
Se requiere un boleto de adulto para cada estudiante mayor de 12 años.


import { studentList } from 'class.students';     se importa un objeto con el nombre de studentList
function needsAdultTicket(adult, ___) {           se declara un funcion llamada needsAdultTicket
  for (var element of adult) {                    se crea un ciclo for para que itere cada uno de los elementos de nuestra funcion
    if (element['age'] > 12) {                    y hacemos una comparacion entre un elemento especifico de nuestro de nuestro objeto en este caso "age" y la edad necesaria para ser mayor de edad
      console.log(element['name']);               se llama un console.log invocando un elemento especifico de nuestro elemento que queremos que se muestre en este caso "age"
    }
  }
};
needsAdultTicket(studentList);                    se llama la funcion para que se ejecute.  






Funcion para llenar crucigrama

import { randomWord } from 'cross.words';
function check(space, word, ___) {                    la funcion toma dos parametros
  if (space.length !== word.length) {                 compara el largo de los dos paramatros
    return false;                                     si los parametros no tienen el mismoo largo nos devuelve un false y saltamos a un ciclo for
  }
  for (let i = 0; i < space.length; i++) {             hacemos que el ciclo for itere en 0, vaya comparando en el largo de cada letra y vaya aunmentando mas 1 
    if (space[i] !== '-' && space[i] !== word[i]) {    usamos un comparador, dentro de este comparamos letra por letra si son iguales tanto los espacios con los string vacios, como las dos parametros letra por letra
      return false;                                    si uno no es igual devolvera false   
    }
  }
  return true;                                          y si todos son iguales devolvera true
};
console.log('-a-t');
console.log(randomWord);
console.log(check('-a-t', randomWord));




LA PALABRA MAS LARGA


Completa la función longestWord para que tome un arreglo de subsecuencias y encuentre la subsecuencia más larga en el arreglo.

Por ejemplo, longestWord(['able', 'ale', 'apple']) devolvería 'apple'.


import { subsequences, stringSequence } from 'subsequence.words';
function findLongestWord(array, ___) {
  let longestWord = '';
  for (var element of array) {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }
  return longestWord;
};
console.log(stringSequence);
console.log(subsequences);
console.log(findLongestWord(subsequences));

> n mabppplee
> able,ale,apple
> apple




*/