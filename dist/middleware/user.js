"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const joi_1 = __importDefault(require("joi"));
// import { Key } from "readline";
const validation = joi_1.default.object({
    id: joi_1.default.number(),
    fname: joi_1.default.string(),
    lname: joi_1.default.string(),
    email: joi_1.default.string().email(),
    dob: joi_1.default.date(),
    roleId: joi_1.default.number(),
    class: joi_1.default.number(),
    grno: joi_1.default.string().alphanum(),
    contact: joi_1.default.string().length(10),
    salary: joi_1.default.number(),
    joiningDate: joi_1.default.date(),
    addr: joi_1.default.string(),
});
const userValidation = (req, res, next) => {
    const userObj = req.body;
    const data = validation.validate(userObj);
    if (data.error == undefined) {
        console.log(123);
        next();
    }
    else {
        return res
            .status(400)
            .json({ "Something Went Wrong ": data.error.message });
    }
};
exports.userValidation = userValidation;
