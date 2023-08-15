class Persona{
    constructor( nombre, edad){
        this . nombre=nombre;
        this . edad=edad;
    }
    saludar(){
        console.log( `Hola compañeros! Mi nombre es: ${this.nombre} y tengo ${this.edad}  `)
    }
}
const persona1=new Persona( "Diego" , 23);
const persona2=new Persona( "Camilo" , 19);

persona1.saludar()
persona2.saludar()