import mongoose from "mongoose";

const productDescriptionSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  memory1: {
    type: String,
    required: true,
  },
  memory2: {
    type: String,
    required: true,
  },
  SSD1: {
    type: String,
    required: true,
  },
  SSD2: {
    type: String,
    required: true,
  },
  coulor1: {
    type: String,
    required: true,
  },
  coulor2: {
    type: String,
    required: true,
  },
  coulor3: {
    type: String,
    required: true,
  },
  coulor4: {
    type: String,
    required: true,
  },
  feature1: {
    type: String,
    required: true,
  },
  feature2: {
    type: String,
    required: true,
  },
  feature3: {
    type: String,
    required: true,
  },
  feature4: {
    type: String,
    required: true,
  },
  feature5: {
    type: String,
    required: true,
  },
  feature6: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Description = mongoose.model("Description", productDescriptionSchema);

export default Description;
