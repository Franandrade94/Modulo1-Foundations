/**
* Tablas de la Vardad 
* @param {Number} a = Vale Verdadero
* @param {Number} b = Vale falso
* @returns Condición de a con respecto a b
*/

let a = 1, b = 0 
function tablaAnd(a,b){return a && b}
function tablaOr(a,b){ return a || b}
function tablaNot(a,b){ return a != b}
function tablaXor(a,b){return tablaOr(tablaAnd(a, !b), tablaAnd(!a, b))}

console.log('%cTABLA %cAND ', 'color:blue', 'color:red');
console.log(`${a} y ${a} = ${tablaAnd(a,a)}`)    // 1 y 1 = 1
console.log(`${b} y ${b} = ${tablaAnd(b,b)}`)    // 0 y 0 = 0
console.log(`${a} y ${b} = ${tablaAnd(a,b)}`)    // 1 y 0 = 0
console.log(`${b} y ${a} = ${tablaAnd(b,a)}`)    // 0 y 1 = 0
console.log('%cTABLA %cOR ', 'color:blue', 'color:red');
console.log(`${a} y ${a} = ${tablaOr(a,a)}`)     // 1 y 1 = 1
console.log(`${b} y ${b} = ${tablaOr(b,b)}`)     // 0 y 0 = 0
console.log(`${a} y ${b} = ${tablaOr(a,b)}`)     // 1 y 0 = 1
console.log(`${b} y ${a} = ${tablaOr(b,a)}`)     // 0 y 1 = 1
console.log('%cTABLA %cXOR ', 'color:blue', 'color:red');
console.log(`${a} y ${b} = ${tablaNot(a,b)}`)    // 1 y 0 = true
console.log(`${b} y ${a} = ${tablaNot(b,a)}`)    // 0 y 1 = true
console.log(`${a} y ${a} = ${tablaNot(a,a)}`)    // 1 y 1 = false
console.log(`${b} y ${b} = ${tablaNot(b,b)}`)    // 0 y 0 = false
console.log('%cTABLA %cNOT ', 'color:blue', 'color:red');
console.log(`${a} y ${a} = ${tablaXor(a,a)}`)    // 1 y 1 = false
console.log(`${b} y ${b} = ${tablaXor(b,b)}`)    // 0 y 0 = 0
console.log(`${a} y ${b} = ${tablaXor(a,b)}`)    // 1 y 0 = true
console.log(`${b} y ${a} = ${tablaXor(b,a)}`)    // 0 y 1 = 1

