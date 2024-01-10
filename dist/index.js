"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const db_1 = require("./config/db/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)({
    origin: ['https://holafly-f7h4.vercel.app', "http://localhost:3000"],
    methods: ['GET', 'POST', 'OPTIONS'],
}));
app.options('*', (0, cors_1.default)());
(0, db_1.connectDB)();
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
