export interface Envs {
  // server properties
  NODE_ENV: "development" | "production" | (string & {});
  readonly APP_PORT: string;

  // telegram chat ids
  readonly APP_DEVELOPER_CHAT_ID: string;
  readonly APP_REPORTS_GROUP_ID: string;
  readonly APP_DEVELOPERS_CHAT_IDS: string;
  readonly APP_CONTENT_CHAT_IDS: string;

  // urls
  readonly APP_UZUM_API_BASE_URL: string;

  // bots
  readonly APP_PARSING_BOT_TOKEN: string;
  readonly APP_FBS_ASSISTANT_BOT_TOKEN: string;
  readonly APP_CONTENT_ASSISTANT_BOT_TOKEN: string;
}

export declare global {
  namespace NodeJS {
    interface ProcessEnv extends Envs {}
  }
}
