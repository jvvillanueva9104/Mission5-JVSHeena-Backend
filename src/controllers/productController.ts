// generate a productController  code that will handle the fetching of the products from the mongodb database

// Path: backend/src/controllers/productController.ts
import { Request, Response } from "express";
import Laptop from "../models/pbtechSchema";

const log = console.log;

export const getProducts = async (req: Request, res: Response) => {
  try {
    const laptops = await Laptop.find();

    const base64Images = laptops.map((laptop) => {
      if (typeof laptop.image && laptop.image instanceof Buffer) {
        const base64Image = laptop.image.toString("base64");
        return { ...laptop.toObject(), image: base64Image };
      } else {
        console.warn("Image is not a buffer:", laptop.image);
        return laptop;
      }
    });
    log("Found products with base64Images", base64Images);
    res.json({ products: base64Images });
  } catch (err) {
    log("No data found", err);
  }
};

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
