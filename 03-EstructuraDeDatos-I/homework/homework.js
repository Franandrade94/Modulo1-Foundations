'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n){

  if( n > 0 && n < 2)
  {return 1}
 
  if (n < 0){
    return 0;
  }

  return n * nFactorial (n-1)
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
}
console.log (nFactorial(5))

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  
  if (n < 2){
    return n;
  }
  
  return nFibonacci(n - 1) + nFibonacci(n - 2);

}
console.log(nFibonacci(7));

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() { 
  
  this.array = []  

}

  Queue.prototype.enqueue = function (data) {
  
    this.array.push(data);
  }

  Queue.prototype.dequeue = function (data) {
  
    return this.array.shift(data);
  }
  
  Queue.prototype.size = function (data) {
  
    return this.array.length;
}

  var queue1 = new Queue ();
  queue1.enqueue('Carli1');
  console.log (queue1.size());
  queue1.enqueue('Carli2');
  queue1.enqueue('Carli3');
  console.log (queue1.size());
  queue1.enqueue('Carli4');
  queue1.dequeue();
  queue1.dequeue();
  console.log (queue1.size())
  console.log (queue1)
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
