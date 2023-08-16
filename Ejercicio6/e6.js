//###################################
// Ejercicio 6
//####################################

//Desarrolado por: Diego Fernando Castro Torres

//Imprima la siguiente secuencia usando ciclos
//1 
//12
//123
//1234
//12345
//123456
//1234567
//12345678
//123456789

//Se crea un string para almacenar los numeros
text=""
//Se crea una variable para ir agregando los valores al string
i=0
while (i<9){
    i++;
    //Se agrega el valor al string
    text+=i+"";    
    //Se imprime el arreglo
    console.log(text)
}