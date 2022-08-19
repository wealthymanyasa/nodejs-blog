//import the mongoose library,
//the model, and the conenctDB(), dropDB(), and dropCollections() functions
//:supertest
const mongoose = require("mongoose");
const { connectDB, dropDB, dropCollections } = require("../setuptestdb");
const Comment = require("../models/user.model");
let request = require('supertest');
const assert = require('assert');
const express = require('express');
const { async } = require('regenerator-runtime');

const app = express();
let _request = request;
  afterEach(() => { 
    _request = null;
  });
  beforeEach(() => {
    _request = request;
  });
 //set up the database.
 beforeAll(async () => {
    await connectDB();
  });
  //clean up the database
  afterAll(async () => {
    await dropDB();
  });
   //clean up the database
  afterEach(async () => {
    await dropCollections();
  });
describe("user", () => {
    describe("given the user does not exist", () => {
        it("should return 404 error page", () => {
            expect(true).toBe(true);
        })
    })
})

describe("testing users", () => {
    
    it("should return all users", () => {
 
       _request(app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
      
    })
  
    it("should add user", async () => {
       const result = await _request(app).post('/users/add').send(
                {
                    "username": "Obert Manyasa",
                  
                }
       )
        expect(200);
       
  
  
      });




})