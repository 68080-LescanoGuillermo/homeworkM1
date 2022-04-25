"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let arreglo = num.split("");
    let suma = 0;
    for (let i = 0; i<arreglo.length; i++){
      suma = suma + (arreglo[i]) *2 **(arreglo.length-1-i);
    }
  return suma;


}

function DecimalABinario(num) {
  // tu codigo aca

 /*  let array = [];
  do{
    if(num%2 !== 0){
      array.push(1);
    }
    else if(num%2 === 0){
      array.push(0);
    }
    num = Math.floor(num/2);
  }

  while(num >=1 );
  let ultimoArray = array.reverse().join("");
  return ultimoArray; */

  
  let res = ""
  while (num > 0){
    res=(num%2) + res
    num=Math.floor(num/2);
  }
  return res
  //res = res + num;

  //return res.split("").reverse().join("");
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
