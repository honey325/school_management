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
exports.deleteattendance = exports.updateattendance = exports.insertattendance = exports.Selectattendance = void 0;
const logs_1 = require("../logs");
const attendance_1 = require("../services/attendance");
const Selectattendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const users = await prisma.user.findMany();
        const users = yield (0, attendance_1.selectattendanceQuery)({ isDelete: false }, { id: true, stdId: true, attDate: true, present: true });
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.Selectattendance = Selectattendance;
const insertattendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, attendance_1.insertattendanceQuery)({
            stdId: Number(req.body.stdId),
            attDate: new Date(req.body.attDate),
            present: Boolean(req.body.present),
        });
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.insertattendance = insertattendance;
const updateattendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, attendance_1.updateattendanceQuery)({
            id: req.body.id,
            // stdId: Number(req.body.stdId),
            attDate: new Date(req.body.attDate),
            present: Boolean(req.body.present),
        }, 0);
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.updateattendance = updateattendance;
const deleteattendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, attendance_1.updateattendanceQuery)({
            id: Number(req.query.id),
        }, 1);
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.deleteattendance = deleteattendance;
