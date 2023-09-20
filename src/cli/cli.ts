#!/usr/bin/env node

import { seedCmd } from "../commands/seed";
import { seed2Cmd } from "../commands/seed2";
import { findCmd } from "../commands/find";
import { deleteCmd } from "../commands/delete";
import { dbConnect } from "../db/dbConnect";
import commander from "commander";

const program = new commander.Command();

dbConnect();

program.command("seed").description("Seed the database").action(seedCmd);

program.command("seed2").description("Seed the database").action(seed2Cmd);

program.command("find").description("Find all laptops").action(findCmd);

program.command("delete").description("Delete all laptops").action(deleteCmd);

program.parseAsync(process.argv);
