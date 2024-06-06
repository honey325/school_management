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
exports.SelectfirstQuery = exports.updateUserQuery = exports.insertUserQuery = exports.SelectUserQuery = void 0;
const __1 = require("..");
function SelectUserQuery(condition, columns) {
    return __awaiter(this, void 0, void 0, function* () {
        // const options: { [index: string]: StringObject } = columns
        //   ? { where: condition, select: columns }
        //   : { where: condition };
        const result = (yield __1.prisma.users.findMany({
            where: {},
            select: {
                id: (columns === null || columns === void 0 ? void 0 : columns.id) || false,
                roleId: (columns === null || columns === void 0 ? void 0 : columns.roleId) || false,
                fname: (columns === null || columns === void 0 ? void 0 : columns.fname) || false,
                lname: (columns === null || columns === void 0 ? void 0 : columns.lname) || false,
                email: (columns === null || columns === void 0 ? void 0 : columns.email) || false,
                dob: (columns === null || columns === void 0 ? void 0 : columns.dob) || false,
                class: (columns === null || columns === void 0 ? void 0 : columns.class) || false,
                grno: (columns === null || columns === void 0 ? void 0 : columns.grno) || false,
                contact: (columns === null || columns === void 0 ? void 0 : columns.contact) || false,
                salary: (columns === null || columns === void 0 ? void 0 : columns.salary) || false,
                joiningDate: (columns === null || columns === void 0 ? void 0 : columns.joiningDate) || false,
                addr: (columns === null || columns === void 0 ? void 0 : columns.addr) || false,
                createdAt: (columns === null || columns === void 0 ? void 0 : columns.createdAt) || false,
                updatedAt: (columns === null || columns === void 0 ? void 0 : columns.updatedAt) || false,
                isDelete: (columns === null || columns === void 0 ? void 0 : columns.isDelete) || false,
            },
        }));
        console.log("userselect", result);
        return result;
    });
}
exports.SelectUserQuery = SelectUserQuery;
function insertUserQuery(input) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        const users = (yield __1.prisma.users.create({
            data: {
                roleId: Number(input.roleId),
                fname: (_a = input.fname) === null || _a === void 0 ? void 0 : _a.toString(),
                lname: input.lname.toString(),
                email: input.email.toString(),
                dob: input.dob,
                class: Number(input.class),
                grno: ((_b = input.grno) === null || _b === void 0 ? void 0 : _b.toString()) || null,
                contact: input.contact.toString(),
                salary: Number(input.salary),
                joiningDate: input.joiningDate,
                addr: (_c = input.addr) === null || _c === void 0 ? void 0 : _c.toString(),
            },
        }));
        console.log("userCreate", users);
        return users;
    });
}
exports.insertUserQuery = insertUserQuery;
function updateUserQuery(input, isdelete) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        let users;
        if (isdelete == 0) {
            users = (yield __1.prisma.users.update({
                where: { id: Number(input.id) },
                data: {
                    // roleId: Number(input.roleId),
                    fname: (_a = input.fname) === null || _a === void 0 ? void 0 : _a.toString(),
                    lname: (_b = input.lname) === null || _b === void 0 ? void 0 : _b.toString(),
                    email: (_c = input.email) === null || _c === void 0 ? void 0 : _c.toString(),
                    dob: new Date(input.dob ? input.dob : "") === new Date()
                        ? undefined
                        : new Date(input.dob ? input.dob : ""),
                    class: Number(input.class),
                    grno: ((_d = input.grno) === null || _d === void 0 ? void 0 : _d.toString()) || null,
                    contact: (_e = input.contact) === null || _e === void 0 ? void 0 : _e.toString(),
                    salary: Number(input.salary),
                    joiningDate: input.joiningDate,
                    addr: ((_f = input.addr) === null || _f === void 0 ? void 0 : _f.toString()) || null,
                },
            }));
            console.log(users, "user update");
        }
        else {
            users = (yield __1.prisma.users.update({
                where: { id: Number(input.id) },
                data: {
                    isDelete: true,
                },
            }));
            console.log(users, "userDelete");
        }
        return users;
    });
}
exports.updateUserQuery = updateUserQuery;
function SelectfirstQuery(condition, columns) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = (yield __1.prisma.users.findFirst({
            where: { fname: "abc" },
        }));
        console.log(result);
        return result;
    });
}
exports.SelectfirstQuery = SelectfirstQuery;
