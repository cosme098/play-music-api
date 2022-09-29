import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { musicRouters } from "./routers";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use("/api", musicRouters);

export { app };
