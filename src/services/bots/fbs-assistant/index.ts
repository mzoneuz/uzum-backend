import config from "@/config";
import { Bot } from "grammy";

const fbsAssistantBot = new Bot(config.bots.fbsAssistant);
// const parsingBot = new Bot(config.parsingBotToken);

export const setBotCommands = async () => {
  const newCommands = [{ command: "start", description: "Botni ishga tushirish" }];
  const commands = await fbsAssistantBot.api.getMyCommands();

  if (commands.length < newCommands.length) {
    await fbsAssistantBot.api.setMyCommands(newCommands);
  }
};

// fbsAssistantBot.use(callbacksHandler);
// fbsAssistantBot.use(commandsHandler);
// fbsAssistantBot.use(filesHandler);
// fbsAssistantBot.catch(errorHandler);

export default fbsAssistantBot;
