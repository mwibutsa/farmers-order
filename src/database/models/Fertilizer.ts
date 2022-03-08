import mongoose, { Schema } from 'mongoose';

export interface FertilizerType {
  fertilizerName: string;
}

const fertilizerSchema = new Schema<FertilizerType>({
  fertilizerName: String,
});

export default mongoose.model('Fertilizer', fertilizerSchema);
