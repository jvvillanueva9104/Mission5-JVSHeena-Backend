"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productDescriptionSchema = new mongoose_1.default.Schema({
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
const Description = mongoose_1.default.model("Description", productDescriptionSchema);
exports.default = Description;
//# sourceMappingURL=productDescription.js.map