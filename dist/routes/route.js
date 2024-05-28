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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const client_1 = require("@prisma/client");
const crudservices_1 = require("../services/crudservices");
const prisma = new client_1.PrismaClient();
exports.router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const users = await prisma.user.findMany();
        const users = yield (0, crudservices_1.SelectUserQuery)({}, { id: true, fname: true, lname: true });
        res.json({ users, str: "users" });
    }
    catch (err) {
        console.log(err);
        res.json(err);
    }
}));
exports.router.get("/insert", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, crudservices_1.insertUserQuery)({
            role_id: 1,
            fname: "honey",
            lname: "andharia",
            dob: new Date("2022-01-20T12:01:30.543Z"),
            email: "honey@gmail.com",
        });
        res.json({ users, str: "users" });
    }
    catch (err) {
        console.log(err);
        res.json(err);
    }
}));
