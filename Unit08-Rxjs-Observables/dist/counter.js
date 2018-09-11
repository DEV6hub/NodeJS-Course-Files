'use strict';

var _rxjs = require('rxjs');

var _operators = require('rxjs/operators');

var count = 10;

var source$ = (0, _rxjs.interval)(1000);

source$.pipe((0, _operators.map)(function (i) {
  return count - i;
}), (0, _operators.takeWhile)(function (number) {
  return number >= 0;
})).subscribe(function (data) {
  return console.log(data);
});