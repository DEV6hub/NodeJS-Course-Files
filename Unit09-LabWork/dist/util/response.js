"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var response = function response(data, code, message) {
  return { data: data, code: code, message: message };
};

exports.default = response;