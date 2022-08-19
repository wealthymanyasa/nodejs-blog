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
describe("/", function () {
  describe("given the comments does not exist", function () {
    it("should return 404 error page", function () {
      expect(404);
    });
  });
  describe("given the comments exist", function () {
    it("should return status 200 ", function () {
      expect(200);
    });
  });
});
describe("testing comments", function () {
  it("should return all comments", function () {
    _request(app).get('/comments').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200);
  });
  it("should add comment", function _callee() {
    var result;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_request(app).post('/comments/add').send({
              "title": "comment five",
              "description": "comment five description",
              "tags": "MAD"
            }));

          case 2:
            result = _context.sent;
            expect(201); //console.log(result)

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it("should return 400 error page", function _callee2() {
    var result;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_request(app).post('/comments/add').send({
              "title": "comment five",
              "description": 1989800 - 1,
              "tags": "MADsskkks"
            }));

          case 2:
            result = _context2.sent;
            expect(400); //console.log(result)

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});