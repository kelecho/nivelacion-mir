/*
    Crea una variable llamada pedro de tipo objeto literal con las siguientes llaves y valores:
    • nombre - "Pedro Perez" 
    • edad - 30 
    • activo - true 
    • hobbies - un arreglo con los siguientes elementos: "programar", "squash", "piano".
*/

let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
}

// Imprime en la consola el valor de la llave edad

console.log(`La edad de Pedro es: ${pedro.edad}\n`);

//Agrega una propiedad con llave estatura y valor 1.8

pedro.estatura = 1.8;

//Elimina la propiedad con llave activo

delete pedro.activo;

/*
Recorre todas las propiedades e 
imprímelas en consola (una línea por 
propiedad y separando la llave y el 
valor con dos puntos :).
*/ 

for (let clave in pedro){
    if (pedro.hasOwnProperty(clave)){
        console.log(`${ clave }: ${ pedro[clave] }\n`);
    }
}

/*
Agrégale al objeto una función llamada saluda que retorne la frase 
“Hola, me llamo ” seguido del nombre de la persona.
*/

pedro.saluda = () => { return `Hola, me llamo ${ pedro.nombre }` };


pedro.saluda_v2 = function() {
    return `Hola, probando otro saludo ${ this.nombre }`;
}

// Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.

console.log(pedro.saluda());

console.log(pedro.saluda_v2());


