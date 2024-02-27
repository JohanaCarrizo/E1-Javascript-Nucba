//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function isMajorOrMinor(num1, num2) {
  if(num1 > num2){
    console.log(num1 +" es mayor que "+num2);
  }else if(num1 < num2){
    console.log(num2 +" es mayor que "+num1);
  }else{
    console.log(num1 +" es igual que "+num2);
  }
    
}

isMajorOrMinor(10,5);