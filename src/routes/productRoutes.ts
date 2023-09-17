import express from "express";
import { getProducts } from "../controllers/productController";

const productFinder = express.Router();

productFinder.get("/products", getProducts);

export default productFinder;
