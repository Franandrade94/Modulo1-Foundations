/*
Retorna una funcion que cuando sea invocada retorne un valor creciente. El primer valor deberia ser 1. Vas a tener que usar closures.
ejemplo: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
*/
function counter(contador = 0) {return ()=>(contador = contador + 1)}

const contador = counter();
console.log(contador());
console.log(contador());

const contador1 = counter();
console.log(contador1());
console.log(contador1());
