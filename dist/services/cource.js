"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatecourseQuery =
  exports.insertcourseQuery =
  exports.selectsubjectsQuery =
    void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function selectsubjectsQuery(condition, columns) {
  return __awaiter(this, void 0, void 0, function* () {
    // const options: { [index: string]: StringObject } = columns
    //   ? { where: condition, select: columns }
    //   : { where: condition };
    const result = yield prisma.course.findMany({
      where: condition,
      select: columns,
    });
    console.log(result);
    return result;
  });
}
exports.selectsubjectsQuery = selectsubjectsQuery;
function insertcourseQuery(input) {
  return __awaiter(this, void 0, void 0, function* () {
    const users = yield prisma.course.create({
      data: {
        name: input.name.toString(),
        description: input.description.toString(),
      },
    });
    console.log(typeof users);
    return users;
  });
}
exports.insertcourseQuery = insertcourseQuery;
function updatecourseQuery(input, isDelete) {
  return __awaiter(this, void 0, void 0, function* () {
    var _a, _b;
    let users = {};
    if (isDelete === 0) {
      users = yield prisma.course.update({
        where: { id: Number(input.id) },
        data: {
          name:
            (_a = input.name) === null || _a === void 0
              ? void 0
              : _a.toString(),
          description:
            (_b = input.description) === null || _b === void 0
              ? void 0
              : _b.toString(),
        },
      });
    } else {
      users = yield prisma.course.update({
        where: { id: Number(input.id) },
        data: {
          isDelete: 1,
        },
      });
    }
    console.log(typeof users);
    return users;
  });
}
exports.updatecourseQuery = updatecourseQuery;
