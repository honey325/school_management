"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const validation = joi_1.default.object({
    stdId: joi_1.default.number(),
    subId: joi_1.default.number(),
    examId: joi_1.default.number(),
    examdate: joi_1.default.date(),
    obtainedMarks: joi_1.default.number(),
});
const resultValidation = (req, res, next) => {
    const userObj = req.body;
    const data = validation.validate(userObj);
    if (data.error == undefined) {
        next();
    }
    else {
        return res
            .status(400)
            .json({ "Something Went Wrong ": data.error.message });
    }
};
exports.resultValidation = resultValidation;
