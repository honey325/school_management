import { NextFunction, Request, Response } from "express";
import { userResult } from "../types/userTypes";
import Joi from "joi";

const validation = Joi.object({
  id: Joi.number(),
  name: Joi.string(),
  class: Joi.number(),
  description: Joi.string(),
});

export const subjectValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userObj: userResult = req.body;
  const data = validation.validate(userObj);
  if (data.error == undefined) {
    next();
  } else {
    return res.status(400).json("Something Went Wrong\n"+data.error.message );
  }
};
