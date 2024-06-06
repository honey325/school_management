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
exports.orderByUserQuery = exports.joinQuery = exports.selectfirstUser = void 0;
const logs_1 = require("../logs");
const exytaQueries_1 = require("../services/exytaQueries");
const selectfirstUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const columns = {
            id: true,
            roleId: true,
            fname: true,
            lname: true,
            email: true,
            dob: true,
        };
        const users = yield (0, exytaQueries_1.SelectfirstQuery)({}, columns);
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.selectfirstUser = selectfirstUser;
function joinQuery(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, exytaQueries_1.selectjoinQuery)({ isDelete: false });
            console.log(result, "joinquery");
            res.status(200).json(result);
        }
        catch (err) {
            (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
            res.status(400).json(err);
        }
    });
}
exports.joinQuery = joinQuery;
function orderByUserQuery(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const input = {
                OR: [
                    { fname: { contains: req.query.content } },
                    { lname: { contains: req.query.content } },
                    { email: { contains: req.query.content } },
                    { class: Number((_a = req.body) === null || _a === void 0 ? void 0 : _a.content) || 0 },
                    { grno: { contains: req.query.content } },
                    { contact: { contains: req.query.content } },
                ],
            };
            const result = yield (0, exytaQueries_1.orderByQuery)(input);
            console.log(result, "orderbyquery");
            res.status(200).json(result);
        }
        catch (err) {
            console.log(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
            res.status(400).json(err);
        }
    });
}
exports.orderByUserQuery = orderByUserQuery;
