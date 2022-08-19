"use strict";

var sum = require('./sum');

test('should return 3', function () {
  expect(sum(1, 3) == 3);
});