import winston from "winston";

const levels = {
  error: 0,
  http: 1,
  warn: 2,
  info: 3,
  debug: 4,
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "blue",
  debug: "white",
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: "DD/MMM/YYYY HH:mm:ss" }),
  winston.format.printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
  }),
);

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize({ all: true }),
      winston.format.printf((info: winston.Logform.TransformableInfo) => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
  }),

  new winston.transports.File({
    filename: "logs/requests.log",
    level: "http",
    format: format,
  }),

  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
    format: format,
  }),

  new winston.transports.File({
    filename: "logs/all.log",
    format: format,
  }),
];

const Logger = winston.createLogger({
  level: "debug",
  levels,
  format,
  transports,
});

export default Logger;
