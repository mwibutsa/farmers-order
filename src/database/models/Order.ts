import mongoose, { Schema, PopulatedDoc } from 'mongoose';
import { PENDING } from '@constants/orderStatus';
import { StoreType } from './Store';
import { UserType } from './User';

export interface OrderType {
  store: PopulatedDoc<StoreType>;
  owner: PopulatedDoc<UserType>;
  landSize: number;
  seedQuantity: number;
  fertilizerQuantity: number;
  status: string;
}

const orderSchema = new Schema<OrderType>({
  store: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Store',
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  landSize: {
    type: Number,
    required: true,
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
