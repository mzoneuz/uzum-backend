import axios from "axios";
import { axiosErrorHandler, generateAndAssignRandomHeaders } from "utilzify";

import config from "@/config";
import { logger } from "@/services";
import { fetchAdaptrer, msgLogger } from "@/utils";

const uzumHttp = axios.create({
  baseURL: config.api.uzumBaseUrl,
  adapter: fetchAdaptrer,
  headers: {
    "Accept-Language": "ru-RU",
  },
});

uzumHttp.interceptors.request.use(c => generateAndAssignRandomHeaders(c), axiosErrorHandler(msgLogger, false));

uzumHttp.interceptors.response.use(
  config => {
    const message = `[${config.config.method}:${config.status}:${config.statusText}] -> ${config.config.url}`;
    logger.http(message);
    return config;
  },
  axiosErrorHandler(msgLogger, false),
);

export default uzumHttp;
