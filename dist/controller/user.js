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
exports.deleteUser = exports.updateUser = exports.selectUser = exports.insertUser = void 0;
const logs_1 = require("../logs");
const user_1 = require("../services/user");
const insertUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const activationCode = Math.floor(Math.random() * 1000000000000 + 1);
    try {
        const user = yield (0, user_1.insertUserQuery)({
            roleId: Number(req.body.roleId),
            fname: (_a = req.body.fname) === null || _a === void 0 ? void 0 : _a.toString(),
            lname: req.body.lname.toString(),
            email: req.body.email.toString(),
            dob: new Date(req.body.dob) || null,
            class: Number(req.body.class),
            grno: (_b = req.body.grno) === null || _b === void 0 ? void 0 : _b.toString(),
            contact: req.body.contact.toString(),
            salary: Number(req.body.salary),
            joiningDate: new Date(req.body.joiningDate),
            addr: (_c = req.body.addr) === null || _c === void 0 ? void 0 : _c.toString(),
            activationCode: activationCode.toString(),
        });
        res.json(`192.168.10.77:8000/activeaccount?code=${activationCode}&email=${req.body.email}`);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.insertUser = insertUser;
const selectUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const columns = {
            id: true,
            roleId: true,
            fname: true,
            lname: true,
            email: true,
            dob: true,
            class: false,
        };
        const users = yield (0, user_1.SelectUserQuery)({}, 
        // { fname: "abc", lname: "xyz", isDelete: false },
        columns);
        res.json(users);
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.selectUser = selectUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e, _f;
    try {
        if (req.body.id == 1 && req.body.roleId !== 3) {
            res.json("you cannot update Admin");
        }
        else {
            const updateduser = yield (0, user_1.updateUserQuery)({ id: req.body.id }, {
                roleId: req.body.roleId,
                fname: (_d = req.body.fname) === null || _d === void 0 ? void 0 : _d.toString(),
                lname: req.body.lname.toString(),
                email: req.body.email.toString(),
                dob: new Date(req.body.dob),
                class: Number(req.body.class),
                grno: (_e = req.body.grno) === null || _e === void 0 ? void 0 : _e.toString(),
                contact: req.body.contact.toString(),
                salary: Number(req.body.salary),
                joiningDate: new Date(req.body.joiningDate),
                addr: (_f = req.body.addr) === null || _f === void 0 ? void 0 : _f.toString(),
            });
            res.json(updateduser);
        }
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (Number(req.query.id) === 1 && Number(req.query.roleId) !== 3) {
            res.json("you Cannot delete Admin");
        }
        else {
            const users = yield (0, user_1.updateUserQuery)({ id: Number(req.query.id) }, { isDelete: 1 });
            console.log(users);
            res.json(users);
        }
    }
    catch (err) {
        (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
        res.json(err);
    }
});
exports.deleteUser = deleteUser;
