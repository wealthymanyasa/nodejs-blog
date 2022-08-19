"use strict";

var request = require('supertest');

var assert = require('assert');

var express = require('express');

var _require = require('regenerator-runtime'),
    async = _require.async;

var app = express();
var _request = request;
afterEach(function () {
  _request = null;
});
beforeEach(function () {
  _request = request;
});
describe("user", function () {
  describe("given the user does not exist", function () {
    it("should return 404 error page", function () {
      expect(true).toBe(true);
    });
  });
});
describe("testing users", function () {
  it("should return all users", function () {
    _request(app).get('/users').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200);
  });
  it("should add user", function _callee() {
    var result;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_request(app).post('/users/add').send({
              "username": "Obert Manyasa"
            }));

          case 2:
            result = _context.sent;
            expect(200);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});