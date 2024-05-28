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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectCourcesQuery = exports.insertUserQuery = exports.SelectUserQuery = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function SelectUserQuery(condition, columns) {
    return __awaiter(this, void 0, void 0, function* () {
        // const options: { [index: string]: StringObject } = columns
        //   ? { where: condition, select: columns }
        //   : { where: condition };
        const result = (yield prisma.user.findMany({
            where: condition,
            select: columns,
        }));
        console.log(result);
        return result;
    });
}
exports.SelectUserQuery = SelectUserQuery;
function insertUserQuery(input) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const users = yield prisma.user.create({
            data: {
                role_id: Number(input.role_id),
                fname: (_a = input.fname) === null || _a === void 0 ? void 0 : _a.toString(),
                lname: (_b = input.lname) === null || _b === void 0 ? void 0 : _b.toString(),
                dob: input.dob || null,
                email: input.email,
            },
        });
        console.log(typeof users);
        return users;
    });
}
exports.insertUserQuery = insertUserQuery;
function SelectCourcesQuery(condition, columns) {
    return __awaiter(this, void 0, void 0, function* () {
        // const options: { [index: string]: StringObject } = columns
        //   ? { where: condition, select: columns }
        //   : { where: condition };
        const result = (yield prisma.cources.findMany({
            where: condition,
            select: columns,
        }));
        console.log(result);
        return result;
    });
}
exports.SelectCourcesQuery = SelectCourcesQuery;
