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
const __1 = require("..");
function selectsubjectsQuery(condition, columns) {
  return __awaiter(this, void 0, void 0, function* () {
    // const options: { [index: string]: StringObject } = columns
    //   ? { where: condition, select: columns }
    //   : { where: condition };
    const result = yield __1.prisma.subjects.findMany({
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
    const users = yield __1.prisma.subjects.create({
      data: {
        name: input.name.toString(),
        class: Number(input.class),
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
      users = yield __1.prisma.subjects.update({
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
      users = yield __1.prisma.subjects.update({
        where: { id: Number(input.id) },
        data: {
          isDelete: true,
        },
      });
    }
    console.log(typeof users);
    return users;
  });
}
exports.updatecourseQuery = updatecourseQuery;
