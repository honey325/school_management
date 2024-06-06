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
exports.updateResultQuery = exports.checkTotalMarks = exports.insertResultQuery = exports.SelectResultQuery = void 0;
const __1 = require("..");
const logs_1 = require("../logs");
function SelectResultQuery() {
    return __awaiter(this, void 0, void 0, function* () {
        // const options: { [index: string]: StringObject } = columns
        //   ? { where: condition, select: columns }
        //   : { where: condition };
        const result = (yield __1.prisma.result.findMany({
            where: { isDelete: false },
        }));
        console.log("resultselect", result);
        return result;
    });
}
exports.SelectResultQuery = SelectResultQuery;
function insertResultQuery(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = (yield __1.prisma.result.create({
            data: {
                stdId: Number(input.stdId),
                subId: Number(input.subId),
                examId: Number(input.examId),
                examdate: input.examdate,
                obtainedMarks: Number(input.obtainedMarks),
            },
        }));
        console.log("resultselect", result);
        return result;
    });
}
exports.insertResultQuery = insertResultQuery;
function checkTotalMarks(examId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const totalMark = (yield __1.prisma.exams.findUnique({
                where: { id: examId },
                select: { totalMarks: true },
            }));
            console.log(totalMark);
            return totalMark.totalMarks;
        }
        catch (error) {
            (0, logs_1.logError)(typeof error === "string" || error instanceof Error ? error : "");
            return 0;
        }
    });
}
exports.checkTotalMarks = checkTotalMarks;
function updateResultQuery(condition, input) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = (yield __1.prisma.result.updateMany({
            where: condition,
            data: input,
        }));
        console.log("resultselect", result);
        return result;
    });
}
exports.updateResultQuery = updateResultQuery;
