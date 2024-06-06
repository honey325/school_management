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
exports.deleteResult = exports.updateResult = exports.insertResult = exports.SelectResult = void 0;
const logs_1 = require("../logs");
const result_1 = require("../services/result");
const SelectResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, result_1.SelectResultQuery)();
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.SelectResult = SelectResult;
const insertResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalMarks = yield (0, result_1.checkTotalMarks)(Number(req.body.examId));
        console.log(totalMarks);
        if (totalMarks !== 0 && Number(req.body.obtainedMarks) < totalMarks) {
            const users = yield (0, result_1.insertResultQuery)({
                stdId: req.body.stdId,
                subId: Number(req.body.subId),
                examId: Number(req.body.examId),
                examdate: new Date(req.body.examdate),
                obtainedMarks: Number(req.body.obtainedMarks),
            });
            res.json(users);
        }
        else if (totalMarks === 0) {
            res.json(`something went Wrong`);
        }
        else {
            res.json(`Obtain Marks Can Not Be More Than Totalmarks Which is ${totalMarks}`);
        }
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.insertResult = insertResult;
const updateResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalMarks = yield (0, result_1.checkTotalMarks)(Number(req.body.examId));
        console.log(totalMarks);
        if (totalMarks !== 0 && Number(req.body.obtainedMarks) < totalMarks) {
            const users = yield (0, result_1.updateResultQuery)({
                examId: Number(req.body.examId),
                stdId: Number(req.body.stdId),
                subId: Number(req.body.subId),
            }, {
                examdate: new Date(req.body.examdate),
                obtainedMarks: Number(req.body.obtainedMarks),
            });
            res.json(users);
        }
        else if (totalMarks === 0) {
            res.json(`something went Wrong`);
        }
        else {
            res.json(`Obtain Marks Can Not Be More Than Totalmarks Which is ${totalMarks}`);
        }
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.updateResult = updateResult;
const deleteResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, result_1.updateResultQuery)({
            examId: Number(req.query.examId),
            stdId: Number(req.query.stdId),
            subId: Number(req.query.subId),
        }, {
            isDelete: true,
        });
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.deleteResult = deleteResult;
