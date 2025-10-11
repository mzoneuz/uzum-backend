// import dedent from "dedent";
// import { delay } from "utilzify";

// import { checkRuntime } from ".";
// import { logger } from "../services";
// import { fbsBot as bot } from "../bot/core";
// import { developerChadIds } from "../helpers/constants";

// const logAndNotifyError = async (errorMessage: string, resource: string = ""): Promise<void> => {
//   logger.error(errorMessage);

//   const runtime = checkRuntime();
//   const telegramMessage = dedent`
//         ${resource ? `<b>Resurs:</b> ${resource}` : ""}
//         <b>ENV: [${runtime.type}]</b>
//         <b>Xatolik yuz berdi</b>: ${errorMessage}`;

//   if (runtime.isLocal) {
//     await bot.api.sendMessage(config.myChatId, telegramMessage, { parse_mode: "HTML" });
//   } else {
//     for (const chatId of developerChadIds) {
//       await delay(500);
//       await bot.api.sendMessage(chatId, telegramMessage, { parse_mode: "HTML" });
//     }
//   }
// };

// export default logAndNotifyError;
