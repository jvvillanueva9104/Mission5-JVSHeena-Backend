#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seed_1 = require("../commands/seed");
const seed2_1 = require("../commands/seed2");
const find_1 = require("../commands/find");
const delete_1 = require("../commands/delete");
const dbConnect_1 = require("../db/dbConnect");
const commander_1 = __importDefault(require("commander"));
const program = new commander_1.default.Command();
(0, dbConnect_1.dbConnect)();
program.command("seed").description("Seed the database").action(seed_1.seedCmd);
program.command("seed2").description("Seed the database").action(seed2_1.seed2Cmd);
program.command("find").description("Find all laptops").action(find_1.findCmd);
program.command("delete").description("Delete all laptops").action(delete_1.deleteCmd);
program.parseAsync(process.argv);
//# sourceMappingURL=cli.js.map