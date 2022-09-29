import { MusicDTO } from "../dtos/IListMusicsResponseDTO";

class MusicMapper {
  public static render({ name, background }: MusicDTO): MusicDTO {
    return {
      name,
      background,
    };
  }

  public static renderMany(data: MusicDTO[]): MusicDTO[] {
    return data.map((music) => this.render(music));
  }
}

export { MusicMapper };
