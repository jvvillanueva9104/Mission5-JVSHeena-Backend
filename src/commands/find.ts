import Laptop from "../models/pbtechSchema";
import { dbDisconnect } from "../db/dbDisconnect";

const log = console.log;

export const findCmd = async () => {
  try {
    const laptops = await Laptop.find();
    log(`Found ${laptops.length} laptops`);
  } catch (err) {
    log("No data found", err);
  } finally {
    await dbDisconnect();
  }
};
