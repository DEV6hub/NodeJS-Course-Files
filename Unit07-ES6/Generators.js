'use strict';

function* generator(){
    yield 0;
    yield 1;
    yield 2;
}

let generatorObject = generator();

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());