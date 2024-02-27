// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function isMultiple(num){
  if(num % 5 == 0){
    console.log(num+" es multiplo de 5");
  }else{
    console.log(num+" no es multiplo de 5");
  }
}

isMultiple(25);