'use strict';

var _rxjs = require('rxjs');

var _operators = require('rxjs/operators');

var source = (0, _rxjs.from)([1, 2, 3, 4, 5]);

var observable = source.pipe((0, _operators.map)(function (i) {
  return i * 10;
}));

observable.subscribe(function (data) {
  return console.log(data);
});