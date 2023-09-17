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
exports.findCmd = void 0;
const pbtechSchema_1 = __importDefault(require("../models/pbtechSchema"));
const dbDisconnect_1 = require("../db/dbDisconnect");
const log = console.log;
const findCmd = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const laptops = yield pbtechSchema_1.default.find();
        log(`Found ${laptops.length} laptops`);
    }
    catch (err) {
        log("No data found", err);
    }
    finally {
        yield (0, dbDisconnect_1.dbDisconnect)();
    }
});
exports.findCmd = findCmd;
//# sourceMappingURL=find.js.map