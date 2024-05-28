"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logger = void 0;
require('dotenv').config();
const pino_1 = __importDefault(require("pino"));
// const pinoPretty = require('pino-pretty');
const fs_1 = __importDefault(require("fs"));
const logsFolder = `${__dirname}/logs`;
const logfile = `${logsFolder}/logfile.log`;
// logs folder exists
if (!fs_1.default.existsSync(logsFolder)) {
    fs_1.default.mkdirSync(logsFolder, { recursive: true });
}
const transport = pino_1.default.transport({
    targets: [
        {
            target: 'pino-pretty',
            options: { destination: logfile, colorize: false, mkdir: true }
        },
        {
            target: 'pino-pretty',
            options: { destination: process.stdout.fd }
        }
    ]
});
exports.logger = (0, pino_1.default)({
    level: process.env.LOG_LEVEL
}, transport);
// Log errors including the file where the error occurs
//logError is property of logger function
const logError = (err) => {
    const error = err instanceof Error ? err : new Error(err);
    const stack = error.stack.split('\n');
    const callerStackLine = stack[2]; // Extract the line of the stack trace where the logging function is called
    const fileMatch = callerStackLine.match(/\(([^)]+)\)/); // Extract the file name from the stack trace
    const fileName = fileMatch ? fileMatch[1] : 'Unknown file'; // Get the file name or use a default value if not found
    // console.log(callerStackLine);
    exports.logger.error({ file: fileName, error: error.message }); //error.name, error.stack
};
exports.logError = logError;
