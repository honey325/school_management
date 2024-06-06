import { Request, Response } from "express";
import { logError } from "../logs";
import { resultselect } from "../types/resulttypes";
import {
  SelectResultQuery,
  checkTotalMarks,
  insertResultQuery,
  updateResultQuery,
} from "../services/result";

export const SelectResult = async (req: Request, res: Response) => {
  try {
    const users: resultselect[] = await SelectResultQuery();
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const insertResult = async (req: Request, res: Response) => {
  try {
    const totalMarks: number = await checkTotalMarks(Number(req.body.examId));
    console.log(totalMarks);
    if (totalMarks !== 0 && Number(req.body.obtainedMarks) < totalMarks) {
      const users: resultselect[] = await insertResultQuery({
        stdId: req.body.stdId,
        subId: Number(req.body.subId),
        examId: Number(req.body.examId),
        examdate: new Date(req.body.examdate),
        obtainedMarks: Number(req.body.obtainedMarks),
      });
      res.json(users);
    } else if (totalMarks === 0) {
      res.json(`something went Wrong`);
    } else {
      res.json(
        `Obtain Marks Can Not Be More Than Totalmarks Which is ${totalMarks}`
      );
    }
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const updateResult = async (req: Request, res: Response) => {
  try {
    const totalMarks: number = await checkTotalMarks(Number(req.body.examId));
    console.log(totalMarks);
    if (totalMarks !== 0 && Number(req.body.obtainedMarks) < totalMarks) {
      const users: resultselect[] = await updateResultQuery(
        {
          examId: Number(req.body.examId),
          stdId: Number(req.body.stdId),
          subId: Number(req.body.subId),
        },
        {
          examdate: new Date(req.body.examdate),
          obtainedMarks: Number(req.body.obtainedMarks),
        }
      );
      res.json(users);
    } else if (totalMarks === 0) {
      res.json(`something went Wrong`);
    } else {
      res.json(
        `Obtain Marks Can Not Be More Than Totalmarks Which is ${totalMarks}`
      );
    }
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const deleteResult = async (req: Request, res: Response) => {
  try {
    const users: resultselect[] = await updateResultQuery(
      {
        examId: Number(req.query.examId),
        stdId: Number(req.query.stdId),
        subId: Number(req.query.subId),
      },
      {
        isDelete: true,
      }
    );
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};
