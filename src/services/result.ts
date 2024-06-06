import { StringNumObject, StringObject } from "../types/general";
import { prisma } from "..";
import { resultinsert, resultselect } from "../types/resulttypes";
import { logError } from "../logs";

export async function SelectResultQuery() {
  // const options: { [index: string]: StringObject } = columns
  //   ? { where: condition, select: columns }
  //   : { where: condition };
  const result: resultselect[] = (await prisma.result.findMany({
    where: {isDelete:false},
  })) as resultselect[];
  console.log("resultselect", result);
  return result;
}

export async function insertResultQuery(input: resultinsert) {
  const result: resultselect[] = (await prisma.result.create({
    data: {
      stdId: Number(input.stdId),
      subId: Number(input.subId),
      examId: Number(input.examId),
      examdate: input.examdate,
      obtainedMarks: Number(input.obtainedMarks),
    },
  })) as unknown as resultselect[];
  console.log("resultselect", result);
  return result;
}

export async function checkTotalMarks(examId: number): Promise<number> {
  try {
    const totalMark: { totalMarks: number } = (await prisma.exams.findUnique({
      where: { id: examId },
      select: { totalMarks: true },
    })) as { totalMarks: number };
    console.log(totalMark);
    return totalMark.totalMarks;
  } catch (error: string | Error | unknown) {
    logError(typeof error === "string" || error instanceof Error ? error : "");
    return 0;
  }
}

export async function updateResultQuery(
  condition: StringNumObject,
  input: resultselect
) {
  const result: resultselect[] = (await prisma.result.updateMany({
    where: condition,
    data: input,
  })) as unknown as resultselect[];
  console.log("resultselect", result);
  return result;
}
