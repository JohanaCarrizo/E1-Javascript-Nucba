// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function isEvenOrOdd(num){

  if(num %2 === 0){
    console.log("Es par");
  }else{
    console.log("Es impar");
  }
}

isEvenOrOdd(11);