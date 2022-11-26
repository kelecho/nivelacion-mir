const receta = {};

receta.nombre = "Sandwich";

receta.ingredientes = [];

receta.ingredientes.push(
    {
        nombre: "Pan",
        cantidad: 2
    }
);

receta.ingredientes.push(
    {
        nombre: "Queso",
        cantidad: 1
    }
);

console.log( receta );

console.log( `Primer Ingrediente de la receta: ${receta.ingredientes[0].nombre} \n` );

let total = 0;
receta.ingredientes.forEach(elemento => {
    total += elemento.cantidad;
});

/*
    forEach(elemento, index, array)
*/

console.log(`Total de ingredientes de la receta: ${total} unidades`);