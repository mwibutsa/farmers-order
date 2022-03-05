import mongoose from 'mongoose';

export const connectDb = async (): Promise<void> => {
  await mongoose.connect(String(process.env.MONGO_URL), {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
  });
};

export const disconnectDb = async (): Promise<void> => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
};
