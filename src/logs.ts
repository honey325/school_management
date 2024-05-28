require('dotenv').config();
import pino, { DestinationStream, Logger } from 'pino';
// const pinoPretty = require('pino-pretty');

import fs from 'fs';

const logsFolder:string = `${__dirname}/logs`;
const logfile:string = `${logsFolder}/logfile.log`;

// logs folder exists
if (!fs.existsSync(logsFolder) as boolean) {
  fs.mkdirSync(logsFolder, { recursive: true });
}
const transport:DestinationStream = pino.transport({
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

export const logger = pino({
  level: process.env.LOG_LEVEL
}, transport);



// Log errors including the file where the error occurs
//logError is property of logger function
export const logError = (err:Error|string)=> {
  const error:Error = err instanceof Error ? err : new Error(err);
  const stack = (error.stack as string).split('\n');
  const callerStackLine:string = stack[2]; // Extract the line of the stack trace where the logging function is called
  const fileMatch:RegExpMatchArray | null = callerStackLine.match(/\(([^)]+)\)/); // Extract the file name from the stack trace
  const fileName:string = fileMatch ? fileMatch[1] : 'Unknown file'; // Get the file name or use a default value if not found

  // console.log(callerStackLine);
  logger.error({ file: fileName, error: error.message });  //error.name, error.stack
};