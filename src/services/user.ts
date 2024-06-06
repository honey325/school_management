// import { RowDataPacket } from "mysql2";
import { StringNumObject, StringObject } from "../types/general";
import { userResult, userinsert, userselect } from "../types/userTypes";
import { prisma } from "..";

export async function SelectUserQuery(
  condition: StringNumObject,
  columns?: userselect
): Promise<userResult[]> {
  // const options: { [index: string]: StringObject } = columns
  //   ? { where: condition, select: columns }
  //   : { where: condition };
  const result: userResult[] = (await prisma.users.findMany({
    where: condition,
    select: {
      id: columns?.id || false,
      roleId: columns?.roleId || false,
      fname: columns?.fname || false,
      lname: columns?.lname || false,
      email: columns?.email || false,
      dob: columns?.dob || false,
      class: columns?.class || false,
      grno: columns?.grno || false,
      contact: columns?.contact || false,
      salary: columns?.salary || false,
      joiningDate: columns?.joiningDate || false,
      addr: columns?.addr || false,
      activationCode: columns?.activationCode || false,
      isActive: columns?.isActive || false,
      createdAt: columns?.createdAt || false,
      updatedAt: columns?.updatedAt || false,
      isDelete: columns?.isDelete || false,
      password: columns?.password || false,
    },
  })) as userResult[];
  console.log("userselect", result);
  return result;
}

export async function insertUserQuery(input: userinsert) {
  const users: userResult = (await prisma.users.create({
    data: {
      roleId: input.roleId,
      fname: input.fname?.toString(),
      lname: input.lname.toString(),
      email: input.email.toString(),
      dob: input.dob,
      class: input.class,
      grno: input.grno?.toString() || null,
      contact: input.contact.toString(),
      salary: input.salary,
      joiningDate: input.joiningDate,
      addr: input.addr?.toString(),
      activationCode: input.activationCode.toString(),
      isActive: false,
    },
  })) as userResult;
  console.log("userCreate", users);
  return users;
}

export async function updateUserQuery(
  condition: StringNumObject,
  data: object
): Promise<{ count: number }> {
  // if (isdelete === 0) {
  let users: { count: number } = (await prisma.users.updateMany({
    where: condition,
    data: data,
  })) as { count: number };
  console.log(users, "user update");
  // }
  // else {
  //   users = (await prisma.users.updateMany({
  //     where: condition,
  //     data: {
  //       isDelete: true,
  //     },
  //   })) as {count:number};
  //   console.log(users, "userDelete");
  // }
  return users;
}
