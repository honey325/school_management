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
exports.cookieExtractor = exports.auth = void 0;
const passport_jwt_1 = require("passport-jwt");
const logs_1 = require("../logs");
const user_1 = require("../services/user");
var cookieExtractor = function (req) {
    var _a;
    return (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
};
exports.cookieExtractor = cookieExtractor;
const auth = (passport) => {
    let options = {
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.SECRET_KEY || "",
    };
    // options.jwtFromRequest = ;
    // options.secretOrKey = ;
    passport.use(new passport_jwt_1.Strategy(options, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield (0, user_1.SelectUserQuery)({ id: Number([payload.id]) }, { email: true });
            if (result.length > 0) {
                return done(null, payload);
            }
            return done(null, false), payload;
        }
        catch (error) {
            (0, logs_1.logError)(typeof error === "string" || error instanceof Error ? error : "");
        }
    })));
};
exports.auth = auth;
