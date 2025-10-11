import dedent from "dedent";
import { delay } from "utilzify";

// import { checkRuntime } from ".";
import { fbsAssistantBot, logger } from "@/services";
import config from "@/config";
import { Bot } from "grammy";

const logAndNotifyError = async (errorMessage: string, resource: string = "", botInstance?: Bot): Promise<void> => {
  logger.error(errorMessage);

  const bot = botInstance || fbsAssistantBot;

  const runtime = { isLocal: true, type: "development" }; // checkRuntime();
  const telegramMessage = dedent`
        ${resource ? `<b>Resurs:</b> ${resource}` : ""}
        <b>ENV: [${runtime.type}]</b>
        <b>Xatolik yuz berdi</b>: ${errorMessage}`;

  if (runtime.isLocal) {
    await bot.api.sendMessage(config.chats.developer, telegramMessage, { parse_mode: "HTML" });
  } else {
    for (const chatId of config.chats.developers) {
      await delay(500);
      await bot.api.sendMessage(chatId, telegramMessage, { parse_mode: "HTML" });
    }
  }
};

export default logAndNotifyError;
