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
exports.deleteCmd = void 0;
const pbtechSchema_1 = __importDefault(require("../models/pbtechSchema"));
const dbDisconnect_1 = require("../db/dbDisconnect");
const log = console.log;
const deleteCmd = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pbtechSchema_1.default.deleteMany({});
        log("Deletion Successful");
    }
    catch (err) {
        log("Deletion Failed", err);
    }
    finally {
        yield (0, dbDisconnect_1.dbDisconnect)();
    }
});
exports.deleteCmd = deleteCmd;
//# sourceMappingURL=delete.js.map