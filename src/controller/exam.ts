import { Request, Response } from "express";
import { logError } from "../logs";
import { examResult } from "../types/examTypes";
import {
  insertExamQuery,
  selectExamQuery,
  updateExamQuery,
} from "../services/exam";

export const SelectExam = async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findMany();

    const users: examResult[] = await selectExamQuery(
      { isDelete: false },
      { id: true, examName: true, examDate: true, totalMarks: true }
    );
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const insertExam = async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findMany();

    const users: examResult = await insertExamQuery({
      examName: req.body.examName?.toString(),
      examDate: new Date(req.body.examDate),
      totalMarks: Number(req.body.totalMarks),
    });
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const updateExam = async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findMany();

    const users: examResult = await updateExamQuery(
      {
        id: req.body.id,
        examName: req.body.examName?.toString(),
        examDate: new Date(req.body.examDate),
        totalMarks: Number(req.body.totalMarks),
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

export const deleteExam = async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findMany();

    const users: examResult = await updateExamQuery(
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
