import { Request, Response } from "express";
import { logError } from "../logs";
import {
  insertattendanceQuery,
  selectattendanceQuery,
  updateattendanceQuery,
} from "../services/attendance";
import { attResult } from "../types/attendTypes";

export const Selectattendance = async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findMany();

    const users: attResult[] = await selectattendanceQuery(
      { isDelete: false },
      { id: true, stdId: true, attDate: true, present: true }
    );
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const insertattendance = async (req: Request, res: Response) => {
  try {
    const users: attResult = await insertattendanceQuery({
      stdId: Number(req.body.stdId),
      attDate: new Date(req.body.attDate),
      present: Boolean(req.body.present),
    });
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const updateattendance = async (req: Request, res: Response) => {
  try {
    const users: attResult = await updateattendanceQuery(
      {
        id: req.body.id,
        // stdId: Number(req.body.stdId),
        attDate: new Date(req.body.attDate),
        present: Boolean(req.body.present),
      },
      0
    );
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const deleteattendance = async (req: Request, res: Response) => {
  try {
    const users: attResult = await updateattendanceQuery(
      {
        id: Number(req.query.id),
      },
      1
    );
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};
