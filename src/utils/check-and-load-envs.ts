import "dotenv/config";

import { Envs } from "@/helpers/types";
import { getInterfaceKeys, isBadEnvKey, parseEnvs } from "@/utils";
import { ENV_EXAMPLE_PATH, ENV_PATH, ENV_PREFIX, ENVS_TYPES_PATH } from "@/helpers/constants";
import { logger } from "@/services";

type EnvType = keyof Envs;

const checkAndLoadEnvs = () => {
  const envParsed = parseEnvs(ENV_PATH);
  const envExampleParsed = parseEnvs(ENV_EXAMPLE_PATH);

  const envFilename = ENV_PATH.split("\\").pop();
  const envExampleFilename = ENV_EXAMPLE_PATH.split("\\").pop();

  const envKeys = Object.keys(envParsed) as EnvType[];
  const envExampleKeys = Object.keys(envExampleParsed) as EnvType[];
  const envTypesKeys = getInterfaceKeys(ENVS_TYPES_PATH, "Envs") as EnvType[];

  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = "development";
  }

  process.env.NODE_ENV = process.env.NODE_ENV.trim();
  envParsed.NODE_ENV = process.env.NODE_ENV;

  const errors = [];

  for (const exampleKey of envExampleKeys) {
    const value = envParsed[exampleKey];
    if (!["string", "number"].includes(typeof value)) {
      errors.push(`Missing env variable: ${exampleKey} at ${envFilename}`);
    }

    if (!envTypesKeys.includes(exampleKey)) {
      logger.warn(`Warning! You have to add exampleEnvKey: [${exampleKey}] to Envs interface!`);
    }
  }

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  for (const key of envKeys) {
    if (!envExampleKeys.includes(key) && !isBadEnvKey(key)) {
      logger.warn(`Warning! You have to add envKey: [${key}] to ${envExampleFilename} file!`);
    }

    if (!envTypesKeys.includes(key) && !isBadEnvKey(key)) {
      logger.warn(`Warning! You have to add envKey: [${key}] to Envs interface!`);
    }

    if (envParsed[key] === "") {
      logger.warn(`Warning! Your envKey: [${key}] is empty!`);
    }
  }

  for (const key of envTypesKeys) {
    if (!envKeys.includes(key) && !isBadEnvKey(key)) {
      logger.warn(`Warning! You have to add envsTypesKey: [${key}] to ${envFilename} file!`);
    }

    if (!envExampleKeys.includes(key) && !isBadEnvKey(key)) {
      logger.warn(`Warning! You have to add envsTypesKey: [${key}] to ${envExampleFilename} file!`);
    }

    if (isBadEnvKey(key)) {
      logger.warn(`Warning! Your envsTypesKey: [${key}] should start with ${ENV_PREFIX} prefix!`);
    }
  }

  return envParsed as Envs;
};

export default checkAndLoadEnvs;
