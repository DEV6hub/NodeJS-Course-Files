"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var add = function add(a, b) {
  return a + b;
};

var mult = function mult(a, b) {
  return a * b;
};

var asyncThing = function asyncThing(callback) {
  return setTimeout(function () {
    return callback(true);
  }, 1000);
};

var app = { add: add, mult: mult, asyncThing: asyncThing };

exports.default = app;