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
exports.deleteExam = exports.updateExam = exports.insertExam = exports.SelectExam = void 0;
const logs_1 = require("../logs");
const exam_1 = require("../services/exam");
const SelectExam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const users = await prisma.user.findMany();
        const users = yield (0, exam_1.selectExamQuery)({ isDelete: false }, { id: true, examName: true, examDate: true, totalMarks: true });
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.SelectExam = SelectExam;
const insertExam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // const users = await prisma.user.findMany();
        const users = yield (0, exam_1.insertExamQuery)({
            examName: (_a = req.body.examName) === null || _a === void 0 ? void 0 : _a.toString(),
            examDate: new Date(req.body.examDate),
            totalMarks: Number(req.body.totalMarks),
        });
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.insertExam = insertExam;
const updateExam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        // const users = await prisma.user.findMany();
        const users = yield (0, exam_1.updateExamQuery)({
            id: req.body.id,
            examName: (_b = req.body.examName) === null || _b === void 0 ? void 0 : _b.toString(),
            examDate: new Date(req.body.examDate),
            totalMarks: Number(req.body.totalMarks),
        }, 0);
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.updateExam = updateExam;
const deleteExam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const users = await prisma.user.findMany();
        const users = yield (0, exam_1.updateExamQuery)({
            id: Number(req.query.id),
        }, 1);
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.deleteExam = deleteExam;
