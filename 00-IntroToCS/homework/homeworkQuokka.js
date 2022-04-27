




























/*
//ES: Ingrese el binario que desea convertir a decimal

let binario = 10101;

//ES: Resultado:

console.log(`${binario} in Decimal is ${toDecimal(binario)}`);
console.log(`${binario} = ${toDecimal(binario)}`);
/**
   * ES: Para pasar un binario a un decimal se usa la siguiente fórmula: Suma(dígito*2^índice).
   * El índice se lee de derecha a iquierda. Ejemplo:
   * Binario: 11101
   * índices: 43210
   * Se procede a hacer la sumatoria: (1*2^0)+(0*2^1)+(1*2^2)+...

function toDecimal(binary) {
  let sum = 0;
  let str = binary.toString();
  let array = str.split('');
  array.reverse();
  
  for (let i = 0; i < array.length; i++) {
    let digit = array[i];
    let index = i;
    sum += digit * 2 ** index;
  }
  return sum;
}
function BinarioADecimal(num) {
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    suma += num[i] * 2 ** (num.length - 1 - i);
  }
  return suma;
}

/*
$         PASAR DE DECIMAL A BINARIO 
(Se divide el numero decimal en 2 hasta que el residuo sea menor a 2, luego se cuentan los residuos de derecha a izquierda tomando el último ??numero como residual)
?                   19
?             19 / 2 = 9 resto 1 ----> 1 
?              9 / 2 = 4 resto 1 ----> 1 
?              4 / 2 = 2 resto 0 ----> 0  
?              2 / 2 = 1 ------------> 1 


function DecimalABinario(num) {
  var binario = '';
  while (num > 0) {
    binario = (num % 2) + binario;
    num = Math.floor(num / 2);
  }
  return binario;
}
*/