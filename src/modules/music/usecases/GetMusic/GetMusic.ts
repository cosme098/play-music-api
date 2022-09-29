import { Service } from "../../../../core/modules/Controllers";
import { MusicDTO } from "../../dtos/IListMusicsResponseDTO";
import listMusics from "../../../../musics/listMusic.json";

class GetMusic implements Service {
  execute(name: string): Promise<MusicDTO[] | null> {
    const result = listMusics.filter((music) =>
      music.name.toLowerCase().includes(name.toLowerCase())
    );

    return Promise.resolve(result);
  }
}

export { GetMusic };
