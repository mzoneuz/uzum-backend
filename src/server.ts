import "express-async-errors";

// imports
import { logger } from "./services";

// node-cron schedulers
import "./schedulers";

const bootstrap = () => {
  logger.info("Application started");
};

bootstrap();
