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

let a = "hackerrank"
let b = "mountain"
let password = ""
let tamaño = 0
bander=true

if (a.length  || b.length){
    bander=false
}

if (bander==true) {
        if (a.length >= b.length) {
        tamaño = a.length
    }
    else {
        tamaño = b.length
    }

    for (let i = 0; i < tamaño; i++) {
        if (i<a.length){
            password += a[i]
        }
        if (i<b.length){
            password += b[i]
        }
    }

    console.log(password)
}
