import { Request, Response } from "express";
import { logError } from "../logs";
import {
  insertsubjectQuery,
  selectsubjectsQuery,
  updatesubjectQuery,
} from "../services/subjects";
import { subjectResult } from "../types/subjectTypes";

export const Selectsubjects = async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findMany();

    const users: subjectResult[] = await selectsubjectsQuery(
      { isDelete: false },
      { id: true, name: true, description: true }
    );
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const insertsubjects = async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findMany();

    const users: subjectResult = await insertsubjectQuery({
      name: req.body.name,
      class: req.body.class,
      description: req.body.description,
    });
    res.json(users);
  } catch (err: string | Error | unknown) {
    logError(
      typeof err === "string" || err instanceof Error ? err : "Error ocuure"
    );
    res.json(err);
  }
};

export const updatesubjects = async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findMany();

    const users: subjectResult = await updatesubjectQuery(
      {
        id: req.body.id,
        name: req.body.name,
        class: req.body.class,
        description: req.body.description,
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

export const deletesubjects = async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findMany();

    const users: subjectResult = await updatesubjectQuery(
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
