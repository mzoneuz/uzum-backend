import { Spreadsheet } from "zutsheet";

// eslint-disable-next-line
// @ts-ignore
import creadentials from "@/assets/credentials.local.json";

const spreadsheet = new Spreadsheet(creadentials.client_email, creadentials.private_key);

export default spreadsheet;
