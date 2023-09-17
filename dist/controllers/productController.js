"use strict";
// generate a productController  code that will handle the fetching of the products from the mongodb database
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const pbtechSchema_1 = __importDefault(require("../models/pbtechSchema"));
const log = console.log;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const laptops = yield pbtechSchema_1.default.find();
        const base64Images = laptops.map((laptop) => {
            if (typeof laptop.image && laptop.image instanceof Buffer) {
                const base64Image = laptop.image.toString("base64");
                return Object.assign(Object.assign({}, laptop.toObject()), { image: base64Image });
            }
            else {
                console.warn("Image is not a buffer:", laptop.image);
                return laptop;
            }
        });
        log("Found products with base64Images", base64Images);
        res.json({ products: base64Images });
    }
    catch (err) {
        log("No data found", err);
    }
});
exports.getProducts = getProducts;
// const products = laptops.map((laptop, index) => {
//   return {
//     id: laptop._id,
//     brand: laptop.brand,
//     model: laptop.model,
//     screen_size: laptop.screen_size,
//     storage: laptop.storage,
//     RAM: laptop.RAM,
//     CPU: laptop.CPU,
//     OS: laptop.OS,
//     GPU: laptop.GPU,
//     price: laptop.price,
//     image: base64Images[index],
//   };
// });
//# sourceMappingURL=productController.js.map