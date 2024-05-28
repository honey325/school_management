import { SelectUserQuery, insertUserQuery } from "../services/crudservices";
import {Request,Response} from "express"

export const insertUser = async (req:Request, res:Response) => {
  try {
    const users = await insertUserQuery({
      role_id: 1,
      fname: "honey",
      lname: "andharia",
      dob: new Date("2022-01-20T12:01:30.543Z"),
      email: "honey@gmail.com",
    });
    res.json({ users, str: "users" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

export const selectUser = async (req:Request, res:Response) => {
  try {
    // const users = await prisma.user.findMany();
    const users = await SelectUserQuery(
      {},
      { id: true, fname: true, lname: true }
    );
    res.json({ users, str: "users" });
  } catch (err: string | Error | unknown) {
    console.log(err);
    res.json(err);
  }
}