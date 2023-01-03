"""
Welcome to the Intermediate Python course.
Bienvendos al curso intermedio de Python

In this course, you will learn about Python collection types, lambda functions, generators, decorators, OOP, and much more.
En este curso, aprenderas sobre tipos de colecciones en python, funciones lambda, generadores(Yield), decoradores, OOP y mucho mas.

We will also build real-world projects and solve several programming challenges.
También construiremos proyectos del mundo real y resolveremos varios desafíos de programación.


This course is designed for intermediate Python developers who already know the basics of Python and want to expand their knowledge.
Este curso está diseñado para desarrolladores intermedios de Python que ya conocen los conceptos básicos de Python y desean ampliar sus conocimientos.

"""

# What is the output of this code?

n = [2, 4, 6, 8]
res = 1
for x in n[1:3]:
  res *= x

print(res) #24  because [1:3] take only [4,6] and makes an iteraction between the two values



"""
DICTIONARIES

Python provides a number of built-in collection types, to store multiple values.
Python proporciona una serie de tipos de colección incorporados para almacenar múltiples valores.

Lists are one of these collection types, and they allow you to store indexed values:
Las listas son uno de estos tipos de colección y le permiten almacenar valores indexados:

"""
x = ['hi', 'hello', 'welcome']
print(x[2]) # welcome

# Each item of a list has an index, which is automatically set.
# Cada elemento de una lista tiene un índice, que se establece automáticamente.

"""
 Dictionaries are another collection type and allow you to map arbitrary keys to values.
 Los diccionarios son otro tipo de colección y le permiten asignar claves arbitrarias a valores.

Dictionaries can be indexed in the same way as lists, using square brackets containing keys.
Los diccionarios se pueden indexar de la misma manera que las listas, utilizando corchetes que contienen claves.

"""
ages = {
   "Dave": 24,
   "Mary": 42,
   "John": 58
}
print(ages["Dave"]) #24
print(ages["Mary"]) #42

# Each element in a dictionary is represented by a key:value pair.
# Cada elemento de un diccionario está representado por un par clave:valor.

"""
Only immutable objects can be used as keys to dictionaries. Immutable objects are those that can't be changed. 
Solo los objetos inmutables se pueden usar como claves para los diccionarios. Los objetos inmutables son aquellos que no se pueden cambiar.


So far, the only mutable objects you've come across are lists and dictionaries.
Hasta ahora, los únicos objetos mutables con los que te has encontrado son listas y diccionarios.

"""
bad_dict = {
  [1, 2, 3]: "one two three", 
} # error   

# Since lists are mutable, the code above throws an error.
# Dado que las listas son mutables, el código anterior arroja un error.

"""
This means that you can use strings, integers, booleans, and any other immutable type as dictionary keys.
Esto significa que puede usar cadenas, enteros, booleanos y cualquier otro tipo inmutable como claves de diccionario.
"""

"""
To determine whether a key is in a dictionary, you can use in and not in, just as you can for a list.
Para determinar si una clave está en un diccionario, puede usar in y no in, al igual que para una lista.
"""
nums = {
  1: "one",
  2: "two",
  3: "three",
}
print(1 in nums)        #True
print("three" in nums)  #False
print(4 not in nums)    #True

"""
A useful dictionary function is get. It does the same thing as indexing, but if the key is not found in the dictionary it returns another specified value instead.
Una función de diccionario útil es get. Hace lo mismo que la indexación, pero si la clave no se encuentra en el diccionario, devuelve otro valor especifico.

Example:
Ejemplo:

"""
pairs = {
   1: "apple",
   "orange": [2, 3, 4], 
   True: False, 
   12: "True",
}

print(pairs.get("orange")) # [2, 3, 4]
print(pairs.get(7, 42)) # 42
print(pairs.get(12345, "not found")) # not found

# To determine how many items a dictionary has, use the len() function.
# Para determinar cuantos items tiene un diccionario, usa la funcion len().

# What is the result of this code?

fib = {1: 1, 2: 1, 3: 2, 4: 3}
print(fib.get(4, 0) + fib.get(7, 5)) # 8 the frist get exists is 4 : 3, however in the second dont existing, but result is equal 7 : 5, then 3 + 5 is 8

