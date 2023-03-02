"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//imports
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_routes_1 = __importDefault(require("./routes/api.routes"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
//middlewares
app.use((0, cors_1.default)());
//routes
app.use('/api', api_routes_1.default);
//start server
app.listen(PORT, () => console.log('Server on port', PORT));
