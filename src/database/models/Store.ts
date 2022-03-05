import mongoose, { Schema, PopulatedDoc } from 'mongoose';
import { UserType } from './User';

export interface StoreType {
  storeName: string;
  owner: PopulatedDoc<UserType>;
}

const storeSchema = new Schema<StoreType>({
  storeName: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

export default mongoose.model('Store', storeSchema);
