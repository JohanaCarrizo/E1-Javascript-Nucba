// 8 - Crea una función que reciba un array de números y un número por parámetro e 
// imprima por consola cada número del array multiplicado por el número pasado por parámetro.

let myArray = [1,2,3,4,5,6,7,8,9,10];

function multiForNumber(myArray, number) {

  for (let i = 0; i < myArray.length; i++) {

    console.log(myArray[i] * number);
  }
}

console.log("##############");
multiForNumber(myArray, 10);