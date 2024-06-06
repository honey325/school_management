import { Request } from "express";
import { prisma } from "..";
import { StringNumObject, StringObject } from "../types/general";
import { userResult, userselect } from "../types/userTypes";

export async function SelectfirstQuery(
  condition: StringObject,
  columns?: userselect
): Promise<userResult> {
  const result: userResult = (await prisma.users.findFirst({
    where: { fname: "abc" },
  })) as userResult;
  console.log(result);
  return result;
}
export async function selectjoinQuery(condition: StringNumObject) {
  const result = await prisma.users.findMany({
    where: condition,
    // select: {
    //   id: true,
    //   roleId: true,
    //   fname: true,
    //   lname: true,
    //   email: true,
    //   dob: true,
    //   class: true,
    //   grno: true,
    //   contact: true,
    //   salary: true,
    //   joiningDate: true,
    //   addr: true,
    //   createdAt: true,
    //   updatedAt: true,
    //   isDelete: true,
    //   result: {
    //     select: {
    //       stdId: true,
    //       subId: true,
    //       examId: true,
    //       examdate: true,
    //       obtainedMarks: true,
    //       createdAt: true,
    //       updatedAt: true,
    //       isDelete: true,
    //     },
    //   },
    // },
    include: { result: true, attendance: true, subTeacher: true },
  });
  console.log(result);
  return result;
}

export async function orderByQuery(input: object) {
  const result: userResult[] = (await prisma.users.findMany({
    where: input,
  })) as userResult[];
  console.log(result);
  return result;
}

