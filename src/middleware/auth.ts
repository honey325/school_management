import { Strategy, StrategyOptions } from "passport-jwt";
import { logError } from "../logs";
import { Request, Response } from "express";
import { userResult } from "../types/userTypes";
import { SelectUserQuery } from "../services/user";

var cookieExtractor = function (req: Request) {
  return req.cookies?.token;
};
// interface Option {
//   jwtFromRequest: Function;
//   secretOrKey: String | undefined;
// }
type DoneCallback = (err: any, user?: Express.User | false | null) => void;
const auth: DoneCallback = (passport) => {
  let options: StrategyOptions = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.SECRET_KEY || "",
  };
  // options.jwtFromRequest = ;
  // options.secretOrKey = ;
  passport.use(
    new Strategy(options, async (payload, done) => {
      try {
        const result: userResult[] = await SelectUserQuery(
          { id: Number([payload.id]) },
          { email: true }
        );
        if (result.length > 0) {
          return done(null, payload);
        }
        return done(null, false), payload;
        
      } catch (error: string | Error | unknown) {
        logError(
          typeof error === "string" || error instanceof Error ? error : ""
        );
      }
    })
  );
};

export { auth, cookieExtractor };
