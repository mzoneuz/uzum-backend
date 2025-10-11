import { extractErrorMessage } from "utilzify";
import { Context, ErrorHandler, GrammyError, HttpError } from "grammy";

import { logAndNotifyError } from "@/utils";

const botErrorHandler: ErrorHandler<Context> = async err => {
  const errorMessage = extractErrorMessage(err.error);
  await logAndNotifyError(errorMessage, "BotErrorHandler");

  if (err.error instanceof GrammyError) {
    console.error("Request error:", err.error.description);
  } else if (err.error instanceof HttpError) {
    console.error("Could not contact Telegram:", err.error);
  } else {
    console.error("Unknown error:", err.error);
  }
};

export default botErrorHandler;
