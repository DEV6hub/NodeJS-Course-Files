'use strict';

class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `${this.x},${this.y}`;
    }
}

class Point3D extends Point{
    constructor(x,y,z) {
        super(x,y);
        this.z = z;
    }
    toString() {
        return `(${super.toString()},${this.z})`;
    }
}

let point = new Point3D(1,2,3);
console.log(point.toString());