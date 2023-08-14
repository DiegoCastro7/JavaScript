//Funcion que no retorna ni recibe parametros
function mensaje() {
    console.log("Imprime mensaje");
}
console.log(typeof mensaje());
//Funcion que no retorna pero recibe parametros
function saludar(nombre) {
    console.log("Hola " + nombre);
}
function mensaje(nombre) {
    console.log("Imprime mensaje " + nombre);
}
//Funcion que retorna pero no recibe parametros
function saludar() {
    console.log("Hola mundo");
}
function mensaje() {
    return "Imprime mensaje";
}
//Funcion que retorna y recibe parametros
function saludar(nombre) {
    console.log("Hola " + nombre);
}
function mensaje(nombre) {
    return "Imprime mensaje " + nombre;
}