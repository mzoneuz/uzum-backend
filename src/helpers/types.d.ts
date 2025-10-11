export interface Envs {
  // server properties
  NODE_ENV: "development" | "production" | (string & {});
  readonly APP_PORT: string;

  // telegram chat ids
  readonly APP_REPORTS_GROUP_ID: string;
  readonly APP_DEVELOPERS_CHAT_IDS: string;
  readonly APP_UZUM_API_BASE_URL: string;
}

export declare global {
  namespace NodeJS {
    interface ProcessEnv extends Envs {}
  }
}
