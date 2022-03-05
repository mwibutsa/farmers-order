/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
// import mongoose, { ConnectOptions } from 'mongoose';

// const mongooseOptions: ConnectOptions = {
// autoIndex: false,
// maxPoolSize: 10,
// serverSelectionTimeoutMS: 5000,
// socketTimeoutMS: 45000,
// family: 4,
// };

// mongoose.connect('mongodb://localhost:27017/farmers_order', mongooseOptions, () => {
//   // eslint-disable-next-line no-console
//   console.log('Connected to the database');
// });

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer();

class DBConnection {
  static async connect(): Promise<void> {
    const uri = mongod.getUri();
    const mongooseOptions = {
      autoIndex: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4,
    };

    await mongoose.connect(uri, mongooseOptions);
  }

  static async closeDatabase(): Promise<void> {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
  }

  static async clearDatabase(): Promise<void> {
    const { collections } = mongoose.connection;
    Object.values(collections).forEach(async (collection) => {
      await collection.drop();
    });
  }
}

export default DBConnection;
