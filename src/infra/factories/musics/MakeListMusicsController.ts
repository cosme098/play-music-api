import { ListMusicsController } from "../../../modules/music/usecases/ListMusics/ListMusicsController";

export function MakeListMusicsController(): ListMusicsController {
  return new ListMusicsController();
}
