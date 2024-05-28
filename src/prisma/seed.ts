import { PrismaClient } from "@prisma/client";
import { ResultSetHeader } from "mysql2";

const prisma = new PrismaClient();

async function main() {
  const alice: {count:number} = await prisma.role.createMany({
    data: [
      {
        role: "student",
      },
      { role: "teacher" },
      { role: "admin" },
    ],
    skipDuplicates: true,
  });
  console.log(alice);
  
}
main();
