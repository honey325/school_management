import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import path from "path";
import portFinder from "portfinder";
import cookieParser from "cookie-parser";
import passport from "passport";
const app: Express = express();

import bodyParser from "body-parser";

import { router } from "./routes/route";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});
app.use(passport.initialize());
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

//routes
app.use(router);

portFinder.getPort(function (err: Error | string, port: number) {
  try {
    if (err) throw err;
    app.listen(port, () => {
      console.log("Server Listen At " + port);
    });
  } catch (err) {
    console.log("Error In Server Listen: " + err);
  }
});
