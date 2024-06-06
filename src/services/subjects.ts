import { StringNumObject, StringObject } from "../types/general";
import { subjectInsert, subjectResult } from "../types/subjectTypes";

import { prisma } from "..";

export async function selectsubjectsQuery(
  condition: StringNumObject,
  columns?: { [index: string]: boolean }
): Promise<subjectResult[]> {
  const result: subjectResult[] = (await prisma.subjects.findMany({
    where: condition,
    select: columns,
  })) as subjectResult[];
  return result;
}

export async function insertsubjectQuery(input: subjectInsert) {
  const users: subjectResult = (await prisma.subjects.create({
    data: {
      name: input.name.toString(),
      class: Number(input.class),
      description: input.description.toString(),
    },
  })) as subjectResult;
  return users;
}

export async function updatesubjectQuery(
  input: subjectResult,
  isDelete: number
) {
  let users: subjectResult = {};
  if (isDelete === 0) {
    users = (await prisma.subjects.update({
      where: { id: Number(input.id) },
      data: {
        name: input.name?.toString(),
        description: input.description?.toString(),
      },
    })) as subjectResult;
  } else {
    users = (await prisma.subjects.update({
      where: { id: Number(input.id) },
      data: {
        isDelete: true,
      },
    })) as subjectResult;
  }
  return users;
}
