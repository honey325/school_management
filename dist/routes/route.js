"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const user_1 = require("../controller/user");
const subjects_1 = require("../controller/subjects");
const attendance_1 = require("../controller/attendance");
const user_2 = require("../middleware/user");
const subject_1 = require("../middleware/subject");
const att_1 = require("../middleware/att");
const result_1 = require("../controller/result");
const result_2 = require("../middleware/result");
const exam_1 = require("../controller/exam");
const extraQueries_1 = require("../controller/extraQueries");
const login_1 = require("../controller/login");
const auth_1 = require("../middleware/auth");
const passport_1 = __importDefault(require("passport"));
(0, auth_1.auth)(passport_1.default);
//user
exports.router.get("/allUsers", passport_1.default.authenticate("jwt", {
    session: false,
    failureRedirect: "/",
}), user_1.selectUser);
exports.router.get("/firstuser", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), extraQueries_1.selectfirstUser);
exports.router.post("/updateuser", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), user_2.userValidation, user_1.updateUser);
exports.router.get("/deleteuser", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), user_1.deleteUser);
exports.router.get("/selectsubjects", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), subjects_1.Selectsubjects);
exports.router.post("/insertsubjects", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), subject_1.subjectValidation, subjects_1.insertsubjects);
exports.router.post("/updatesubjects", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), subject_1.subjectValidation, subjects_1.updatesubjects);
exports.router.get("/deletesubjects", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), subjects_1.deletesubjects);
exports.router.get("/selectatt", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), attendance_1.Selectattendance);
exports.router.post("/insertatt", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), att_1.attValidation, attendance_1.insertattendance);
exports.router.post("/updateatt", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), att_1.attValidation, attendance_1.updateattendance);
exports.router.get("/deleteatt", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), attendance_1.deleteattendance);
exports.router.get("/selectresult", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), result_1.SelectResult);
exports.router.post("/insertresult", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), result_2.resultValidation, result_1.insertResult);
exports.router.post("/updateresult", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), result_2.resultValidation, result_1.updateResult);
exports.router.get("/deleteresult", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), result_1.deleteResult);
exports.router.get("/selectExam", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), exam_1.SelectExam);
exports.router.post("/insertExam", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), exam_1.insertExam);
exports.router.post("/updateExam", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), exam_1.updateExam);
exports.router.get("/deleteExam", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), exam_1.deleteExam);
exports.router.get("/selectJoinQuery", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), extraQueries_1.joinQuery);
exports.router.get("/searchbyany", passport_1.default.authenticate("jwt", { session: false, failureRedirect: "/" }), extraQueries_1.orderByUserQuery);
exports.router.get("/activeaccount", login_1.activeUser);
exports.router.post("/generatepwd", login_1.generatepwd);
exports.router.post("/login", login_1.login);
exports.router.post("/register", user_2.userValidation, user_1.insertUser);
exports.router.get("/", (req, res) => {
    res.json({ msg: "welcome Please Login First" });
});
