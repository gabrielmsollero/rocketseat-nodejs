import { randomUUID } from "crypto"

export class DatabaseMemory {
  #videos = new Map()

  list(search) {
    let videos = Array.from(this.#videos.entries())
      .map((videoArray) => {
        const [id, data] = videoArray;

        return {
          id,
          ...data
        }
      });

    if (search) {
      videos = videos.filter((video) => {
        return video.title.includes(search)
      })
    }

    return videos;
  }

  create(video) {
    const videoId = randomUUID();
    this.#videos.set(videoId, video)
  }

  update(id, video) {
    this.#videos.set(id, video)
  }

  delete(id) {
    this.#videos.delete(id)
  }
}