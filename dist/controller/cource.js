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
exports.deletesubjects =
  exports.updatesubjects =
  exports.insertsubjects =
  exports.Selectsubjects =
    void 0;
const logs_1 = require("../logs");
const courses_1 = require("../services/courses");
const Selectsubjects = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      // const users = await prisma.user.findMany();
      const users = yield (0, courses_1.selectsubjectsQuery)(
        {},
        { id: true, name: true, description: true }
      );
      res.json(users);
    } catch (err) {
      (0,
      logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
      res.json(err);
    }
  });
exports.Selectsubjects = Selectsubjects;
const insertsubjects = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      // const users = await prisma.user.findMany();
      const users = yield (0, courses_1.insertcourseQuery)({
        name: req.body.name,
        class: req.body.class,
        description: req.body.description,
      });
      res.json(users);
    } catch (err) {
      (0,
      logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
      res.json(err);
    }
  });
exports.insertsubjects = insertsubjects;
const updatesubjects = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      // const users = await prisma.user.findMany();
      const users = yield (0, courses_1.updatecourseQuery)(
        {
          id: req.body.id,
          name: req.body.name,
          class: req.body.class,
          description: req.body.description,
        },
        0
      );
      res.json(users);
    } catch (err) {
      (0,
      logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
      res.json(err);
    }
  });
exports.updatesubjects = updatesubjects;
const deletesubjects = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      // const users = await prisma.user.findMany();
      const users = yield (0, courses_1.updatecourseQuery)(
        {
          id: Number(req.query.id),
        },
        1
      );
      res.json(users);
    } catch (err) {
      (0,
      logs_1.logError)(typeof err === "string" || err instanceof Error ? err : "Error ocuure");
      res.json(err);
    }
  });
exports.deletesubjects = deletesubjects;
