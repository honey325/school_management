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
exports.updateattendanceQuery = exports.insertattendanceQuery = exports.selectattendanceQuery = void 0;
const __1 = require("..");
function selectattendanceQuery(condition, columns) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = (yield __1.prisma.attendance.findMany({
            where: condition,
            select: columns,
        }));
        return result;
    });
}
exports.selectattendanceQuery = selectattendanceQuery;
function insertattendanceQuery(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = (yield __1.prisma.attendance.create({
            data: {
                stdId: Number(input.stdId),
                attDate: new Date(input.attDate),
                present: input.present,
            },
        }));
        return users;
    });
}
exports.insertattendanceQuery = insertattendanceQuery;
function updateattendanceQuery(input, isDelete) {
    return __awaiter(this, void 0, void 0, function* () {
        let users = {};
        if (isDelete === 0) {
            users = (yield __1.prisma.attendance.update({
                where: { id: Number(input.id) },
                data: {
                    // stdId: Number(input.stdId),
                    attDate: input.attDate,
                    present: input.present,
                },
            }));
        }
        else {
            users = (yield __1.prisma.attendance.update({
                where: { id: Number(input.id) },
                data: {
                    isDelete: true,
                },
            }));
        }
        return users;
    });
}
exports.updateattendanceQuery = updateattendanceQuery;
