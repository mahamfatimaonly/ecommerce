import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: 'Category', //category mein jo mangoose.model ka nam rakha ha
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer, //is se hum koi b file yan phtot save krwa skty
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true },
)

export default mongoose.model('Products', productSchema)
