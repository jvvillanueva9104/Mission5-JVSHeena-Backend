import mongoose, { Schema } from 'mongoose';

const pbtechSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  screen_size: {
    type: Number,
    required: true,
  },
  storage: {
    type: Number,
    required: true,
  },
  RAM: {
    type: Number,
    required: true,
  },
  CPU: {
    type: String,
    required: true,
  },
  OS: {
    type: String,
    required: true,
  },
  GPU: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true,
  },
});

const Laptop = mongoose.model('Laptop', pbtechSchema);

export default Laptop;
