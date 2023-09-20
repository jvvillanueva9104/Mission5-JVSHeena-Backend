"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.descriptionFinder = exports.productFinder = void 0;
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const productFinder = express_1.default.Router();
exports.productFinder = productFinder;
const descriptionFinder = express_1.default.Router();
exports.descriptionFinder = descriptionFinder;
productFinder.get("/products", productController_1.getProducts);
descriptionFinder.get("/description", productController_1.getProducts2);
//# sourceMappingURL=productRoutes.js.map