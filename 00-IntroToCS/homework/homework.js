"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let array = num.split('');

  array.reverse('');
  let decimal=0;
  
  for (let i = 0; i< array.length; i++)
  {
    decimal = decimal + Math.pow(2, i) * array[i] ;
  }

  return decimal;
  //algo
}
console.log( BinarioADecimal('101011'))

function DecimalABinario(num) 
{
  // tu codigo aca

  
  
  let array = [];
    
  while (num > 0) 
  {
    array.unshift(num % 2)
    num = Math.floor(num / 2);
  }
  return array.join();
}
console.log(DecimalABinario(10))

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
function printing() {
  console.log(1);
  setTimeout(function() { console.log(2); }, 1000);
  setTimeout(function() { console.log(3); }, 0);
  console.log(4);
}

printing();