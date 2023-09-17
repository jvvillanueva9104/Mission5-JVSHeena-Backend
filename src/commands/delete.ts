import Laptop from "../models/pbtechSchema";
import { dbDisconnect } from "../db/dbDisconnect";

const log = console.log;

export const deleteCmd = async () => {
  try {
    await Laptop.deleteMany({});
    log("Deletion Successful");
  } catch (err) {
    log("Deletion Failed", err);
  } finally {
    await dbDisconnect();
  }
};
