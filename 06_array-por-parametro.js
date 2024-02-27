// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let array = ["Hola", "soy", "Julia"];

function receiveArray(array) {
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

console.log("##############");
receiveArray(array);