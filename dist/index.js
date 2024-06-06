"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const portfinder_1 = __importDefault(require("portfinder"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const passport_1 = __importDefault(require("passport"));
const app = (0, express_1.default)();
const body_parser_1 = __importDefault(require("body-parser"));
const route_1 = require("./routes/route");
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient({
    log: ["query", "info", "warn", "error"],
});
app.use(passport_1.default.initialize());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "ejs");
//routes
app.use(route_1.router);
portfinder_1.default.getPort(function (err, port) {
    try {
        if (err)
            throw err;
        app.listen(port, () => {
            console.log("Server Listen At " + port);
        });
    }
    catch (err) {
        console.log("Error In Server Listen: " + err);
    }
});
