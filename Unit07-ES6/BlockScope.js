'use strict';

function foo(x,y) {
    if(x > y) {
        var temp = x;
        x = y;
        y = temp;
    }
    console.log(temp === x);
    return [x,y];
}

function bar(x,y) {
    if(x > y) {
        let temp = x;
        x = y;
        y = temp;
    }
    console.log(temp === x);
    return [x,y];
}

foo(2,3);
bar(2,5);