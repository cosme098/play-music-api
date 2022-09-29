import { MusicDTO } from "../../dtos";
import { MusicMapper } from "../../mappers/MusicMapper";
import listMusics from "../../../../musics/listMusic.json";
import { Service } from "../../../../core/modules/Controllers";

class ListMusics implements Service {
  async execute(): Promise<MusicDTO[]> {
    return Promise.resolve(MusicMapper.renderMany(listMusics));
  }
}

export { ListMusics };
