"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dbConnect_1 = require("./db/dbConnect");
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
(0, dbConnect_1.dbConnect)();
app.use("/", productRoutes_1.default);
const port = 4000;
app.listen(4000, () => {
    console.log(`We're good to go at port:${port}!`);
});
//# sourceMappingURL=app.js.map