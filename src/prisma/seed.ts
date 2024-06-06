import { PrismaClient } from "@prisma/client";
import { ResultSetHeader } from "mysql2";

const prisma = new PrismaClient();

async function main() {
  const data1: { count: number } = await prisma.role.createMany({
    data: [{ role: "student" }, { role: "teacher" }, { role: "admin" }],
    skipDuplicates: true,
  });
  console.log(data1);
  const data2: { count: number } = await prisma.subjects.createMany({
    data: [
      {
        name: "subject1",
        class: 1,
        description: "aaaaaaaaaaaaaaaaaaaaaaaa",
      },
    ],
    skipDuplicates: true,
  });
  console.log(data2);
  const data3 = await prisma.users.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      roleId: 3,
      class: 4,
      fname: "honey",
      lname: "andharia",
      grno: "df524dsf",
      dob: new Date("2002-11-25"),
      addr: "dgggggggggggg",
      email: "admin@gmail.com",
      contact: "1234567892",
      joiningDate: new Date("2024-12-12"),
      activationCode: "bahskdbveoifrjhwefw",
      isActive: true,
    },
  });
  console.log(data3);
}
main();
