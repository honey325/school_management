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
exports.orderByQuery = exports.selectjoinQuery = exports.SelectfirstQuery = void 0;
const __1 = require("..");
function SelectfirstQuery(condition, columns) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = (yield __1.prisma.users.findFirst({
            where: { fname: "abc" },
        }));
        console.log(result);
        return result;
    });
}
exports.SelectfirstQuery = SelectfirstQuery;
function selectjoinQuery(condition) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield __1.prisma.users.findMany({
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
    });
}
exports.selectjoinQuery = selectjoinQuery;
function orderByQuery(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = (yield __1.prisma.users.findMany({
            where: input,
        }));
        console.log(result);
        return result;
    });
}
exports.orderByQuery = orderByQuery;
