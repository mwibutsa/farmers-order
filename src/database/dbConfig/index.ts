import mongoose, { ConnectOptions } from "mongoose";

const mongooseOptions: ConnectOptions = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

mongoose.connect(
  "mongodb://localhost:27017/farmers_order",
  mongooseOptions,
  () => {
    console.log("Connected to the database");
  }
);
