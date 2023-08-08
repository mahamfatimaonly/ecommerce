import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //white space remove hojaen gy
    },
    email: {
      type: String,
      required: true,
      unique: true, // aik is se aik user loginn hona chahye.
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0, // false 1 -> true
    },
  },
  { timestamps: true },
) // jo user add hoga uska time stramps add hojayega

export default mongoose.model('users', userSchema)
