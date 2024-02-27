// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function imprimirCantidadDePalabras(palabra, cantidad){

  for(var i = 0; i < cantidad; i++){

    console.log(palabra);
  }
}

console.log("##############");
imprimirCantidadDePalabras("hola", 2);