var app = {
  add: function (a, b) {
    return a + b;
  },
  mult: function (a, b) {
    return a * b;
  },
  asyncThing: function (callback) {
    setTimeout(function () {
      callback(true);
    }, 1000);
  }
}

module.exports = app;
