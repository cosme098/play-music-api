import { app } from "./App";
import * as dotenv from "dotenv";
import { Logger } from "../../shared/Logger";

dotenv.config();

app.listen(process.env.APP_PORT, () => {
  Logger.info(`running in port: ${process.env.APP_PORT}`);
});
