//###################################
// Reto 1
//####################################

//Desarrolado por: Diego Fernando Castro Torres

//Creacion de Password

/*
A password manager wants to create new passwords using two strings given by the user. then combined
to create a harder-to-guess combination. Given two strings, interleave the characters of the strings to
create a new string. Beginning with an empty string. altemately a character from string a and from
string b. If one of the strings is exhausted before the other, the remaining letters from the other
string all at once. The result is the new password.

Example
If a = hackemank' and b = mountain', the result is hmaocuknetrariannk
Function Description
Complete the function newPassword in the editor
newPassword has the following parameter(s):
string a: the first string
string b: the second string

Retums:
string: the merged string
Constraints:
• 1 <= lengths of a,b <= 25000
• All characters in a and b are lowercase letters in the range ascii['a'-'z']

Input Format For Custom Testing
Input from stdin will be processed as follows and passed to the function:
The first line contains the string a.
The second line the string b.
*/

// Declaracion de lets
let password = "" // Acumulador de la contraseña 
let tamaño = 0 // Iterador en los string, coge el tamaño del string mas largo
// Inputs para los dos strings
let a = prompt("Por favor, ingrese la primer parte de la contraseña :");
let b = prompt("Por favor, ingrese la segunda parte de la contraseña:");
// Uso de "expresiónes regulares" tema nuevo
let soloLetras = /^[a-z]+$/;
// Uso de metodo "test" tema nuevo
// Comprueba que el string cumpla con la condicion dada por la expresion regular y el tamaño deseado
if (soloLetras.test(a) && soloLetras.test(b) && a.length >= 1 && a.length <= 250000 && b.length >= 1 && b.length <= 250000) {
    console.log("Los datos son correctos");
    // asigna el tamaño lara saber cuantas veces iterar
    if (a.length >= b.length) {
        tamaño = a.length
    }
    else {
        tamaño = b.length
    }
    // en cada recorrido asigna un caracter del string a y del b, si uno es mas corto que el otro la password continua con el string mas largo
    for (let i = 0; i < tamaño; i++) {
        if (i<a.length){
            password += a[i]
        }
        if (i<b.length){
            password += b[i]
        }

    console.log("Su contraseña es:" + password)
} 
// si no se cumple con las condiciones
else {
  console.log("Las entradas deben ser solo letras minúsculas, tener entre 1 y 250,000 caracteres.");
}





