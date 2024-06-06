import { Request, Response } from "express";
import { SelectUserQuery, updateUserQuery } from "../services/user";
import { logError } from "../logs";
import { userResult } from "../types/userTypes";
import jwt from "jsonwebtoken";
export async function activeUser(req: Request, res: Response) {
  try {
    const email: string = req.query.email?.toString() || "";
    const code: userResult[] = await SelectUserQuery(
      { email: email },
      { activationCode: true }
    );
    const update: { count: number } = await updateUserQuery(
      { email: email },
      { isActive: true }
    );
    console.log(code[0].activationCode == req.query.code);

    if (code[0].activationCode == req.query.code) {
      res.status(200).json({
        status: "success",
        msg: "generate Password",
        link: "192.168.10.77:8000/generatepwd",
      });
    } else {
      res.status(200).json({
        status: "reject",
        msg: "please regenerate activation link",
        link: "192.168.10.77:8000/login",
      });
    }
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
}

export async function generatepwd(req: Request, res: Response) {
  try {
    if (req.body.pwd === req.body.conpwd) {
      const update: { count: number } = await updateUserQuery(
        { email: req.body.email },
        { password: req.body.pwd }
      );
    }
    res.status(200).json({
      status: "success",
      msg: "you can login now with ",
      link: "192.168.10.77:8000/login",
    });
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
}

export async function login(req: Request, res: Response) {
  try {
    const data: userResult[] = await SelectUserQuery(
      { email: req.body.email },
      { id: true, password: true, roleId: true }
    );
    if (data[0].password === req.body.password) {
      const token = jwt.sign(
        {
          id: data[0].id,
          email: data[0].email,
          roleId: data[0].roleId,
        },
        process.env.SECRET_KEY!,
        {
          expiresIn: "2h",
        }
      );
      res.cookie("token", token).status(200).json({
        status: "success",
        msg: "login sucessfully",
        // link: "192.168.10.77:8000/login",
      });
    } else {
      res.status(200).json({
        status: "regect",
        msg: "something went wrong Login Again",
        // link: "192.168.10.77:8000/login",
      });
    }
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
}
