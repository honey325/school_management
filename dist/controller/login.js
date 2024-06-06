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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.generatepwd = exports.activeUser = void 0;
const user_1 = require("../services/user");
const logs_1 = require("../logs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function activeUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const email = ((_a = req.query.email) === null || _a === void 0 ? void 0 : _a.toString()) || "";
            const code = yield (0, user_1.SelectUserQuery)({ email: email }, { activationCode: true });
            const update = yield (0, user_1.updateUserQuery)({ email: email }, { isActive: true });
            console.log(code[0].activationCode == req.query.code);
            if (code[0].activationCode == req.query.code) {
                res.status(200).json({
                    status: "success",
                    msg: "generate Password",
                    link: "192.168.10.77:8000/generatepwd",
                });
            }
            else {
                res.status(200).json({
                    status: "reject",
                    msg: "please regenerate activation link",
                    link: "192.168.10.77:8000/login",
                });
            }
        }
        catch (err) {
            (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
            res.json(err);
        }
    });
}
exports.activeUser = activeUser;
function generatepwd(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (req.body.pwd === req.body.conpwd) {
                const update = yield (0, user_1.updateUserQuery)({ email: req.body.email }, { password: req.body.pwd });
            }
            res.status(200).json({
                status: "success",
                msg: "you can login now with ",
                link: "192.168.10.77:8000/login",
            });
        }
        catch (err) {
            (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
            res.json(err);
        }
    });
}
exports.generatepwd = generatepwd;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, user_1.SelectUserQuery)({ email: req.body.email }, { id: true, password: true, roleId: true });
            if (data[0].password === req.body.password) {
                const token = jsonwebtoken_1.default.sign({
                    id: data[0].id,
                    email: data[0].email,
                    roleId: data[0].roleId,
                }, process.env.SECRET_KEY, {
                    expiresIn: "2h",
                });
                res.cookie("token", token).status(200).json({
                    status: "success",
                    msg: "login sucessfully",
                    // link: "192.168.10.77:8000/login",
                });
            }
            else {
                res.status(200).json({
                    status: "regect",
                    msg: "something went wrong Login Again",
                    // link: "192.168.10.77:8000/login",
                });
            }
        }
        catch (err) {
            (0, logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
            res.json(err);
        }
    });
}
exports.login = login;
