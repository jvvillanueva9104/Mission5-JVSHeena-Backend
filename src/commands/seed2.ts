import fs from "fs";
import path from "path";
import Description from "../models/productDescription";
import { dbDisconnect } from "../db/dbDisconnect";

const log = console.log;

export const seed2Cmd = async () => {
  try {
    const seedMsg2 = [
      {
        product: "Macbook Pro 2022",
        memory1: "8GB",
        memory2: "16GB",
        SSD1: "256GB",
        SSD2: "512GB",
        coulor1: "Silver",
        coulor2: "Gold",
        coulor3: "Space Grey",
        coulor4: "Rose Gold",
        feature1: "8-Core CPU",
        feature2: "7-OR 8-Core GPU",
        feature3: "All day battery life",
        feature4: "Thermal Efficiency",
        feature5: "Learning Machine",
        feature6: "True Tone Technology",
        image: readFile("macbookpro2022.webp"),
        price: 2999.99,
      },
    ];
    await Description.insertMany(seedMsg2);
    log("Seed Complete");
  } catch (err) {
    log(err);
  } finally {
    await dbDisconnect();
  }
};

function readFile(file: string) {
  const imagesDir = path.join(__dirname, "..", "images");
  const filePath = path.join(imagesDir, file);
  console.log("Reading file: ", filePath);
  return fs.readFileSync(filePath);
}
