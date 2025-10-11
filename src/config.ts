import { checkAndLoadEnvs } from "@/utils";

const ENV = checkAndLoadEnvs();

const config = {
  api: {
    uzumBaseUrl: ENV.APP_UZUM_API_BASE_URL!,
  },
  credentials: {},
  chats: {
    developer: ENV.APP_DEVELOPER_CHAT_ID,
    reportsId: ENV.APP_REPORTS_GROUP_ID,
    developers: (process.env.APP_DEVELOPERS_CHAT_IDS || "").split("/").map(Number),
  },
  bots: {
    parsing: ENV.APP_PARSING_BOT_TOKEN,
    fbsAssistant: ENV.APP_FBS_ASSISTANT_BOT_TOKEN,
    contentAssistant: ENV.APP_CONTENT_ASSISTANT_BOT_TOKEN,
  },
};

export default config;
