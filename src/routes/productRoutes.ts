import express from "express";
import { getProducts, getProducts2 } from "../controllers/productController";

const productFinder = express.Router();
const descriptionFinder = express.Router();

productFinder.get("/products", getProducts);
descriptionFinder.get("/description", getProducts2);

export { productFinder, descriptionFinder };
