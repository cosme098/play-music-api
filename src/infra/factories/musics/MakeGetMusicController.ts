import { GetMusicController } from "../../../modules/music/usecases/GetMusic/GetMusicController";

export function MakeGetMusicController(): GetMusicController {
  return new GetMusicController();
}
