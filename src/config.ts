import { checkAndLoadEnvs } from "@/utils";

const ENV = checkAndLoadEnvs();

const config = {
  api: {
    uzumBaseUrl: ENV.APP_UZUM_API_BASE_URL!,
  },
  credentials: {
    chats: {
      reportsId: ENV.APP_REPORTS_GROUP_ID,
      developers: (process.env.APP_DEVELOPERS_CHAT_IDS || "").split("/").map(Number),
    },
  },
};

export default config;
