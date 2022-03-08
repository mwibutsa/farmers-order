import mongoose, { Schema } from 'mongoose';

export interface SeedType {
  seedName: string;
}

const seedSchema = new Schema<SeedType>({
  seedName: String,
});

export default mongoose.model('Seed', seedSchema);
