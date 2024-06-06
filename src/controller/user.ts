import { logError } from "../logs";
import {
  SelectUserQuery,
  insertUserQuery,
  updateUserQuery,
} from "../services/user";
import { Request, Response } from "express";
import { userResult, userselect } from "../types/userTypes";

export const insertUser = async (req: Request, res: Response) => {
  const activationCode = Math.floor(Math.random() * 1000000000000 + 1);
  try {
    const user: userResult = await insertUserQuery({
      roleId: Number(req.body.roleId),
      fname: req.body.fname?.toString(),
      lname: req.body.lname.toString(),
      email: req.body.email.toString(),
      dob: new Date(req.body.dob) || null,
      class: Number(req.body.class),
      grno: req.body.grno?.toString(),
      contact: req.body.contact.toString(),
      salary: Number(req.body.salary),
      joiningDate: new Date(req.body.joiningDate),
      addr: req.body.addr?.toString(),
      activationCode: activationCode.toString(),
    });
    res.json(
      `192.168.10.77:8000/activeaccount?code=${activationCode}&email=${req.body.email}`
    );
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const selectUser = async (req: Request, res: Response) => {
  try {
    const columns: userselect = {
      id: true,
      roleId: true,
      fname: true,
      lname: true,
      email: true,
      dob: true,
      class: false,
    };
    const users: userResult[] = await SelectUserQuery(
      {},
      // { fname: "abc", lname: "xyz", isDelete: false },
      columns
    );
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    if (req.body.id == 1 && req.body.roleId !== 3) {
      res.json("you cannot update Admin");
    } else {
      const updateduser: { count: number } = await updateUserQuery(
        { id: req.body.id },
        {
          roleId: req.body.roleId,
          fname: req.body.fname?.toString(),
          lname: req.body.lname.toString(),
          email: req.body.email.toString(),
          dob: new Date(req.body.dob),
          class: Number(req.body.class),
          grno: req.body.grno?.toString(),
          contact: req.body.contact.toString(),
          salary: Number(req.body.salary),
          joiningDate: new Date(req.body.joiningDate),
          addr: req.body.addr?.toString(),
        }
      );
      res.json(updateduser);
    }
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    if (Number(req.query.id) === 1 && Number(req.query.roleId) !== 3) {
      res.json("you Cannot delete Admin");
    } else {
      const users: { count: number } = await updateUserQuery(
        { id: Number(req.query.id) },
        { isDelete: 1 }
      );
      console.log(users);
      res.json(users);
    }
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};
