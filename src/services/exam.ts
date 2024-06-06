import { prisma } from "..";
import { examInsert, examResult } from "../types/examTypes";
import { StringNumObject, StringObject } from "../types/general";

export async function selectExamQuery(
  condition: StringNumObject,
  columns?: { [index: string]: boolean }
) {
  const result = await prisma.exams.findMany({
    where: condition,
    select: columns,
  });
  return result;
}

export async function insertExamQuery(input: examInsert) {
  const users = await prisma.exams.create({
    data: {
      examName: input.examName.toString(),
      examDate: input.examDate,
      totalMarks: Number(input.totalMarks),
    },
  });
  return users;
}

export async function updateExamQuery(input: examResult, isDelete: number) {
  let users = {};
  if (isDelete === 0) {
    users = await prisma.exams.update({
      where: { id: Number(input.id) },
      data: {
        examName: input.examName?.toString(),
        examDate: input.examDate,
        totalMarks: Number(input.totalMarks),
      },
    });
  } else {
    users = await prisma.exams.update({
      where: { id: Number(input.id) },
      data: {
        isDelete: true,
      },
    });
  }
  return users;
}
