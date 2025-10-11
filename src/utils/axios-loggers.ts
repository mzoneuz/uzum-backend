import { getAdapter } from "axios";

import { logger } from "@/services";

export const fetchAdaptrer = getAdapter("fetch");

export const msgLogger = (data: unknown, msg: string) => {
  console.log(data);
  logger.error(msg);
  // logAndNotifyError(msg, "AxiosErrorHandler");
};
