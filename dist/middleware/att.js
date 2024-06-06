"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const validation = joi_1.default.object({
    id: joi_1.default.number(),
    stdId: joi_1.default.number(),
    attDate: joi_1.default.date(),
    present: joi_1.default.boolean(),
});
const attValidation = (req, res, next) => {
    const userObj = req.body;
    const data = validation.validate(userObj);
    if (data.error == undefined) {
        next();
    }
    else {
        return res.status(400).json("Something Went Wrong\n" + data.error.message);
    }
};
exports.attValidation = attValidation;
