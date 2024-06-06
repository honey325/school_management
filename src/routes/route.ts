import express, { NextFunction, Request, Response } from "express";
export const router = express.Router();
import {
  deleteUser,
  insertUser,
  selectUser,
  updateUser,
} from "../controller/user";
import {
  Selectsubjects,
  deletesubjects,
  insertsubjects,
  updatesubjects,
} from "../controller/subjects";
import {
  Selectattendance,
  deleteattendance,
  insertattendance,
  updateattendance,
} from "../controller/attendance";
import { userValidation } from "../middleware/user";
import { subjectValidation } from "../middleware/subject";
import { attValidation } from "../middleware/att";
import {
  SelectResult,
  deleteResult,
  insertResult,
  updateResult,
} from "../controller/result";
import { resultValidation } from "../middleware/result";
import {
  SelectExam,
  deleteExam,
  insertExam,
  updateExam,
} from "../controller/exam";
import {
  joinQuery,
  orderByUserQuery,
  selectfirstUser,
} from "../controller/extraQueries";
import { activeUser, generatepwd, login } from "../controller/login";
import { auth } from "../middleware/auth";
import passport from "passport";
auth(passport);

//user
router.get(
  "/allUsers",
  passport.authenticate("jwt", {
    session: false,
    failureRedirect: "/",
  }),
  selectUser
);

router.get(
  "/firstuser",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  selectfirstUser
);

router.post(
  "/updateuser",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userValidation,
  updateUser
);
router.get(
  "/deleteuser",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  deleteUser
);

router.get(
  "/selectsubjects",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  Selectsubjects
);
router.post(
  "/insertsubjects",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  subjectValidation,
  insertsubjects
);
router.post(
  "/updatesubjects",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  subjectValidation,
  updatesubjects
);
router.get(
  "/deletesubjects",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  deletesubjects
);
router.get(
  "/selectatt",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  Selectattendance
);
router.post(
  "/insertatt",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  attValidation,
  insertattendance
);
router.post(
  "/updateatt",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  attValidation,
  updateattendance
);
router.get(
  "/deleteatt",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  deleteattendance
);

router.get(
  "/selectresult",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  SelectResult
);
router.post(
  "/insertresult",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  resultValidation,
  insertResult
);
router.post(
  "/updateresult",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  resultValidation,
  updateResult
);
router.get(
  "/deleteresult",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  deleteResult
);

router.get(
  "/selectExam",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  SelectExam
);
router.post(
  "/insertExam",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  insertExam
);
router.post(
  "/updateExam",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  updateExam
);
router.get(
  "/deleteExam",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  deleteExam
);

router.get(
  "/selectJoinQuery",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  joinQuery
);
router.get(
  "/searchbyany",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  orderByUserQuery
);

router.get("/activeaccount", activeUser);
router.post("/generatepwd", generatepwd);
router.post("/login", login);
router.post("/register", userValidation, insertUser);
router.get("/", (req: Request, res: Response) => {
  res.json({ msg: "welcome Please Login First" });
});
