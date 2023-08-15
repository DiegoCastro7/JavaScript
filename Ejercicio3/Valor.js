// ###################################
// Ejercicio Sust
//####################################

//Desarrolado por: Diego Fernando Castro Torres

//Escribe una función que tome un array de números y un valor objetivo
//como entrada, y devuelva un array de arrays que contengan pares de
//números en el array original que sumen al valor objetivo.


function arreglo(num, sum) {
    let numbers = [];
    for (i = 0; i < num.length; i++) {
        for (p = i+1; p < num.length; p++) { 
            if (num[i] + num[p] == sum) { 
                numbers.push([num[i], num[p]]);
            }
        }
    }
    return numbers;
}

console.log(arreglo([2, 4, 3, 6, 9, 8], 10));

// Hay un artículo en promoción, si el cliente está entre los 20 primeros clientes, tiene 30%
// de descuento y entre los primeros 50 clientes, un 10% de descuento. Haga una
// función que permita saber cuánto descuento tiene el cliente, según el orden en que llegó.

function orden(num){
    if (num>=1 && num<=20){
        desc = console.log("Obtienes un desc del 20%");
    }
    else if (num>20 && num<=50){
        desc = console.log("Obtienes un desc del 10%");
    }
    else{
        desc = console.log("Obtienes un desc del 0%");
    }
    return desc
}
orden(90)
