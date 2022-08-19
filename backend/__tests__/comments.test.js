//import the mongoose library,
//the model, and the conenctDB(), dropDB(), and dropCollections() functions
//:supertest
const mongoose = require("mongoose");
const { connectDB, dropDB, dropCollections } = require("../setuptestdb");
const Comment = require("../models/comment.model");
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
//test index route
describe("/", () => {
    describe("given the comments does not exist", () => {
        it("should return 404 error page", () => {
            expect(404);
        })
    })
    describe("given the comments exist", () => {
        it("should return status 200 ", () => {
            expect(200);
        })
    })
})
//add comments test case
    it("should add comment", () => {

         _request(app).post('/comments/add').send(
                {
                    "title": "comment five",
                    "description": "comment five description",
                    "tags": "MAD"
                }
       )
         expect();
        //console.log(result)
  
      });

      it("should return 400 error page", async () => {
        const result = await _request(app).post('/comments/add').send(
                 {
                     "title": "comment five",
                     "description": 1989800-1,
                     "tags": "MADsskkks"
                 }
        )
          expect(400);
         //console.log(result)
   
       });
      //put request to /comments/like with invalid _id
       it("should return 400 error page", async () => {
        const result = await _request(app).put('/comments/like').send(
                 {
                     "_id": "invalid-id"
                 }
        )
          expect(400);
         //console.log(result)
   
       });
        //put request to /comments/unlike with invalid _id
        it("should return 400 error page", async () => {
            const result = await _request(app).put('/comments/unlike').send(
                     {
                         "_id": "invalid-id"
                     }
            )
              expect(400);
             //console.log(result)
       
           });
          
            //put request to /comments/like with valid _id
       it("should return 200 success page", async () => {
        const result = await _request(app).put('/comments/like').send(
                 {
                    "_id":"62f9624a168279bd31e7a962"
                 }
        )
          expect(200);
         //console.log(result)
   
        });
          
        //put request to /comments/unlike with valid _id
   it("should return 200 success page", async () => {
    const result = await _request(app).put('/comments/unlike').send(
             {
                "_id":"62f9624a168279bd31e7a962"
             }
    )
      expect(200);
     //console.log(result)

   });

   //sort by most recent test
   describe("/sortRecent", () => {
    describe("given the comments does not exist", () => {
        it("should return 404 error page", () => {
            expect(404);
        })
    })
//check if the comments ex
    describe("given the comments exist", () => {
        it("should return status 200 ", () => {
            expect(200);
        })
    })
    //check if comments is in descending order
    describe("expect sort to be descending", () => {
        it("should return comments in descending order", () => {
            expect({createdAt:'desc'});
        })
    })
       //sort by most liked comments test
   describe("/sortMostLiked", () => {
    describe("given the comments does not exist", () => {
        it("should return 404 error page", () => {
            expect(404);
        })
    })
//check if the comments exists
    describe("given the comments exist", () => {
        it("should return status 200 ", () => {
            expect(200);
        })
    })
    //check if comments are soryted in most liked or using comment with the most likes
    describe("expect sort to be descending", () => {
        it("should return comments in descending order", () => {
            expect({like: -1});
        })
    })
})
})
