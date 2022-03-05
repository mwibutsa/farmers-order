import mongoose, { ConnectOptions } from 'mongoose';
import 'dotenv/config';

const mongooseOptions: ConnectOptions = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

mongoose.connect(String(process.env.MONGO_URL), mongooseOptions, () => {
  // eslint-disable-next-line no-console
  console.log('Connected to the database');
});
