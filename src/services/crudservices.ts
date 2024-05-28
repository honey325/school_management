import { PrismaClient } from "@prisma/client";
// import { RowDataPacket } from "mysql2";
import { StringObject } from "../types/general";
import { courseResult, userResult, userinsert } from "../types/selectTypes";
import { Model } from "sequelize";

const prisma = new PrismaClient();

export async function SelectUserQuery(
  condition: StringObject,
  columns?: { [index: string]: boolean }
): Promise<userResult[]> {
  // const options: { [index: string]: StringObject } = columns
  //   ? { where: condition, select: columns }
  //   : { where: condition };
  const result: userResult[] = (await prisma.user.findMany({
    where: condition,
    select: columns,
  })) as userResult[];
  console.log(result);
  return result;
}
type ModelName = "user";

export async function insertUserQuery(input: userinsert):Promise<userResult> {
  const users: userResult = await prisma.user.create({
    data: {
      role_id: Number(input.role_id),
      fname: input.fname?.toString(),
      lname: input.lname?.toString(),
      dob: input.dob || null,
      email: input.email,
    },
  });
  console.log(typeof users);
  return users;
}

export async function SelectCourcesQuery(
  condition: StringObject,
  columns?: StringObject
): Promise<courseResult[]> {
  // const options: { [index: string]: StringObject } = columns
  //   ? { where: condition, select: columns }
  //   : { where: condition };
  const result: courseResult[] = (await prisma.cources.findMany({
    where: condition,
    select: columns,
  })) as courseResult[];
  console.log(result);
  return result;
}
