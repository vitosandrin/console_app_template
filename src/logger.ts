import * as winston from "winston";
import { existsSync, mkdirSync } from "fs";
import { join } from "path";
import moment from "moment-timezone";

moment.tz.setDefault("America/Sao_Paulo");

const logsFolder = "logs";
if (!existsSync(logsFolder)) {
  mkdirSync(logsFolder);
}

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: () => moment().format("YYYY-MM-DD HH:mm:ss"),
    }),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    }),
  ),
  transports: [
    new winston.transports.File({
      filename: join(logsFolder, "error.log"),
      level: "error",
    }),
    new winston.transports.File({
      filename: join(logsFolder, "combined.log"),
    }),
    new winston.transports.Console({ level: "info" }),
  ],
});

export default logger;
