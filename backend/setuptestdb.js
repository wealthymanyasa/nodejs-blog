const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
let mongo = null;
 
//connectDB() function. 
//This function creates a new Mongo memory server instance and connects to Mongoose.
const connectDB = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
 
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
// dropDB() function by adding the following code. 
//This function drops the database, closes the Mongoose connection, 
//and stops the Mongo memory server instance.
const dropDB = async () => {
    if (mongo) {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
      await mongo.stop();
    }
  };
  // dropCollections function
  //It drops all the created Mongoose collections. 
  //i will run it after each test.
  const dropCollections = async () => {
    if (mongo) {
      const collections = await mongoose.connection.db.collections();
      for (let collection of collections) {
        await collection.deleteMany();
      }
    }
  };

//export the conenctDB(), dropDB(), and dropCollections() functions.
module.exports = { connectDB, dropDB, dropCollections}