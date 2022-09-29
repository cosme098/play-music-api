import Router from "express";
import { ExpressAdapter } from "../../../adapters/express";
import {
  MakeGetMusicController,
  MakeListMusicsController,
} from "../../../factories";

const musicRouters = Router();

musicRouters.get("/musics", ExpressAdapter.create(MakeListMusicsController));

musicRouters.get(
  "/:musicName/music",
  ExpressAdapter.create(MakeGetMusicController)
);

export { musicRouters };
