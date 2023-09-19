"use strict";
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
exports.seed2Cmd = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const productDescription_1 = __importDefault(require("../models/productDescription"));
const dbDisconnect_1 = require("../db/dbDisconnect");
const log = console.log;
const seed2Cmd = () => __awaiter(void 0, void 0, void 0, function* () {
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
        yield productDescription_1.default.insertMany(seedMsg2);
        log("Seed Complete");
    }
    catch (err) {
        log(err);
    }
    finally {
        yield (0, dbDisconnect_1.dbDisconnect)();
    }
});
exports.seed2Cmd = seed2Cmd;
function readFile(file) {
    const imagesDir = path_1.default.join(__dirname, "..", "images");
    const filePath = path_1.default.join(imagesDir, file);
    console.log("Reading file: ", filePath);
    return fs_1.default.readFileSync(filePath);
}
//# sourceMappingURL=seed2.js.map