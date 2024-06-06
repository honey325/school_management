import { Request, Response } from "express";

import { logError } from "../logs";
import { userResult, userselect } from "../types/userTypes";
import {
  SelectfirstQuery,
  orderByQuery,
  selectjoinQuery,
} from "../services/exytaQueries";
import { equal, number } from "joi";
import { log } from "console";

export const selectfirstUser = async (req: Request, res: Response) => {
  try {
    const columns: userselect = {
      id: true,
      roleId: true,
      fname: true,
      lname: true,
      email: true,
      dob: true,
    };
    const users: userResult = await SelectfirstQuery({}, columns);
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export async function joinQuery(req: Request, res: Response) {
  try {
    const result = await selectjoinQuery({ isDelete: false });
    console.log(result, "joinquery");
    res.status(200).json(result);
  } catch (err) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.status(400).json(err);
  }
}

export async function orderByUserQuery(req: Request, res: Response) {
  try {
    const input = {
      OR: [
        { fname: { contains: req.query.content } },
        { lname: { contains: req.query.content } },
        { email: { contains: req.query.content } },
        { class: Number(req.body?.content) || 0 },
        { grno: { contains: req.query.content } },
        { contact: { contains: req.query.content } },
      ],
    };

    const result = await orderByQuery(input);
    console.log(result, "orderbyquery");
    res.status(200).json(result);
  } catch (err) {
    console.log(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.status(400).json(err);
  }
}
