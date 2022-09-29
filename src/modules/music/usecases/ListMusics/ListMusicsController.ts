import { HttpRequest } from "../../../../core/http/HttpRequests";
import { HttpResponse, ok } from "../../../../core/http/HttpResponse";
import { Controller } from "../../../../core/modules/Controllers";
import { ListMusics } from "./ListMusics";

export class ListMusicsController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const listMusic = new ListMusics();
    const musics = await listMusic.execute();

    return ok(musics);
  }
}
