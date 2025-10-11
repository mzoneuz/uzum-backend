import fs from "fs";
import "dotenv/config";
import dotenv, { DotenvParseOutput } from "dotenv";

import { logger } from "@/services";
import { Envs } from "@/helpers/types";
import { ENV_PREFIX } from "@/helpers/constants";

const EXCEPTION_KEYS = ["NODE_ENV"];

export const isBadEnvKey = (key: string) => !key.startsWith(ENV_PREFIX) && !EXCEPTION_KEYS.includes(key);

export const parseEnvs = (envPath: string) => {
  const fileName = envPath.split("\\").pop();

  if (!fs.existsSync(envPath)) {
    throw new Error(`${fileName} topilmadi: ${envPath}`);
  }

  const parsed: DotenvParseOutput = dotenv.parse(fs.readFileSync(envPath));
  const badKeys = Object.keys(parsed).filter(isBadEnvKey);

  if (badKeys.length) {
    const list = badKeys.map(k => `${k}`).join(", ");
    logger.error(`${fileName} da quyidagilar xato: ${list}; Masalan: ${badKeys[0]} o'rniga ${ENV_PREFIX}${badKeys[0]} deb yozing.`);
  }

  return parsed as unknown as Envs;
};
