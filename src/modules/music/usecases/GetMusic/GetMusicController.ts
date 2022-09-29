import { HttpRequest } from "../../../../core/http/HttpRequests";
import { HttpResponse, ok } from "../../../../core/http/HttpResponse";
import { Controller } from "../../../../core/modules/Controllers";
import { IGetMusicDTO } from "../../dtos";
import { GetMusic } from "./getMusic";

class GetMusicController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const musicName: IGetMusicDTO = request.params;
    const getMusic = new GetMusic();

    const music = await getMusic.execute(musicName.musicName);

    return ok(music);
  }
}

export { GetMusicController };
