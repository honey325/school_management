import { NextFunction, Request, Response } from "express";
import { userResult } from "../types/userTypes";
import Joi from "joi";

const validation = Joi.object({
  stdId: Joi.number(),
  subId: Joi.number(),
  examId: Joi.number(),
  examdate: Joi.date(),
  obtainedMarks: Joi.number(),
});

export const resultValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userObj: userResult = req.body;
  const data = validation.validate(userObj);
  if (data.error == undefined) {
    next();
  } else {
    return res
      .status(400)
      .json({ "Something Went Wrong ": data.error.message });
  }
};
