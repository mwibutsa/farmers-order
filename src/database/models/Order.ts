import mongoose, { Schema, PopulatedDoc } from 'mongoose';
import { PENDING } from '@constants/orderStatus';
import { FertilizerType } from './Fertilizer';
import { SeedType } from './Seed';
import { StoreType } from './Store';
import { UserType } from './User';

export interface OrderType {
  store: PopulatedDoc<StoreType>;
  farmer: PopulatedDoc<UserType>;
  landSize: number;
  seedQuantity: number;
  fertilizerQuantity: number;
  status: string;
  seed: PopulatedDoc<SeedType>;
  fertilizer: PopulatedDoc<FertilizerType>;
}

const orderSchema = new Schema<OrderType>({
  store: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Store',
  },
  farmer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  landSize: {
    type: Number,
    required: true,
  },
  seed: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Seed',
  },
  fertilizer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Fertilizer',
  },
  seedQuantity: Number,
  fertilizerQuantity: Number,
  status: {
    type: String,
    required: true,
    default: PENDING,
  },
});

orderSchema.pre('save', function (next) {
  this.seedQuantity = this.landSize;
  this.fertilizerQuantity = this.landSize * 3;
  next();
});

export default mongoose.model('Order', orderSchema);
