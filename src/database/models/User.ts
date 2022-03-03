import mongoose, { Schema } from "mongoose";

interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
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
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", (next) => {
  next();
});
export default mongoose.model("User", userSchema);
