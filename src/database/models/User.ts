import mongoose, { Schema } from 'mongoose';
import { comparePasswords, hashPassword } from '@helpers/password';

export interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  isValidPassword: (password: string) => boolean;
  id?: string;
}

const userSchema = new Schema<UserType>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.pre('save', async function (next) {
  this.password = await hashPassword(this.password);
  next();
});

userSchema.methods.isValidPassword = function (password: string): Promise<boolean> {
  return comparePasswords(password, this.password);
};

userSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret.password;
    return ret;
  },
});

export default mongoose.model('User', userSchema);
