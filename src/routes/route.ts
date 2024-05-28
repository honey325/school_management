import express, { Request, Response } from "express";
export const router = express.Router();
import { PrismaClient } from "@prisma/client";
import { SelectUserQuery, insertUserQuery } from "../services/crudservices";
import { insertUser, selectUser } from "../controller/user";
const prisma = new PrismaClient();

//user
router.get("/", selectUser);
router.get("/insert", insertUser);
