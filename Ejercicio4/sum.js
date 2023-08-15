//###################################
// Ejercicio 4
//####################################

//Desarrolado por: Diego Fernando Castro Torres

//Se desea realizar la suma de los nümeros pares y la suma de los nümeros impares (por aparte), 
//de los nümeros comprendidos desde uno hasta 578934.

let pares = []
let impares = []
let sumpares = 0
let sumimpares = 0

for (let i = 0; i <= 578934; i++) {
    if (i % 2 === 0) {
        pares.push(i)
        sumpares += i
    }
    else if (i % 2 != 0) {
        impares.push(i)
        sumimpares += i
    }
}

console.log("La suma de los numeros pares es: " + sumpares)
console.log("La suma de los numeros impares es: " + sumimpares)