// generate a productController  code that will handle the fetching of the products from the mongodb database

// Path: backend/src/controllers/productController.ts
import { Request, Response } from "express";
import Laptop from "../models/pbtechSchema";
import Description from "../models/productDescription";

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

export const getProducts2 = async (req: Request, res: Response) => {
  try {
    const description = await Description.find();

    const base64Images = description.map((desc) => {
      if (typeof desc.image && desc.image instanceof Buffer) {
        const base64Image = desc.image.toString("base64");
        return { ...desc.toObject(), image: base64Image };
      } else {
        console.warn("Image is not a buffer:", desc.image);
        return desc;
      }
    });
    log("Found products with base64Images", base64Images);
    res.json({ products: base64Images });
  } catch (err) {
    log("No data found", err);
  }
};
