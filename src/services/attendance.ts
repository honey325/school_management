import { StringNumObject, StringObject } from "../types/general";
import { prisma } from "..";
import { attInsert, attResult } from "../types/attendTypes";

export async function selectattendanceQuery(
  condition: StringNumObject,
  columns?: { [index: string]: boolean }
): Promise<attResult[]> {
  const result: attResult[] = (await prisma.attendance.findMany({
    where: condition,
    select: columns,
  })) as attResult[];
  return result;
}

export async function insertattendanceQuery(input: attInsert) {
  const users: attResult = (await prisma.attendance.create({
    data: {
      stdId: Number(input.stdId),
      attDate: new Date(input.attDate),
      present: input.present,
    },
  })) as attResult;
  return users;
}

export async function updateattendanceQuery(
  input: attResult,
  isDelete: number
) {
  let users: attResult = {};
  if (isDelete === 0) {
    users = (await prisma.attendance.update({
      where: { id: Number(input.id) },
      data: {
        // stdId: Number(input.stdId),
        attDate: input.attDate,
        present: input.present,
      },
    })) as attResult;
  } else {
    users = (await prisma.attendance.update({
      where: { id: Number(input.id) },
      data: {
        isDelete: true,
      },
    })) as attResult;
  }

  return users;
}
