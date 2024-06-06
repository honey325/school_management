"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const data1 = yield prisma.role.createMany({
            data: [{ role: "student" }, { role: "teacher" }, { role: "admin" }],
            skipDuplicates: true,
        });
        console.log(data1);
        const data2 = yield prisma.subjects.createMany({
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
        const data3 = yield prisma.users.upsert({
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
    });
}
main();
