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
exports.updateExamQuery = exports.insertExamQuery = exports.selectExamQuery = void 0;
const __1 = require("..");
function selectExamQuery(condition, columns) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield __1.prisma.exams.findMany({
            where: condition,
            select: columns,
        });
        return result;
    });
}
exports.selectExamQuery = selectExamQuery;
function insertExamQuery(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield __1.prisma.exams.create({
            data: {
                examName: input.examName.toString(),
                examDate: input.examDate,
                totalMarks: Number(input.totalMarks),
            },
        });
        return users;
    });
}
exports.insertExamQuery = insertExamQuery;
function updateExamQuery(input, isDelete) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        let users = {};
        if (isDelete === 0) {
            users = yield __1.prisma.exams.update({
                where: { id: Number(input.id) },
                data: {
                    examName: (_a = input.examName) === null || _a === void 0 ? void 0 : _a.toString(),
                    examDate: input.examDate,
                    totalMarks: Number(input.totalMarks),
                },
            });
        }
        else {
            users = yield __1.prisma.exams.update({
                where: { id: Number(input.id) },
                data: {
                    isDelete: true,
                },
            });
        }
        return users;
    });
}
exports.updateExamQuery = updateExamQuery;
