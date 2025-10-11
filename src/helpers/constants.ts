import path from "path";

export const ENV_PREFIX = "APP_";

export const ROOT_PATH = process.cwd();

export const PUBLIC_PATH = path.join(ROOT_PATH, "public");

export const ENV_PATH = path.join(ROOT_PATH, "/.env");

export const ENV_EXAMPLE_PATH = path.join(ROOT_PATH, "/.env.example");

export const ENVS_TYPES_PATH = path.join(ROOT_PATH, "src/helpers/types.d.ts");
