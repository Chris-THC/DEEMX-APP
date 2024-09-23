import { deezerInstance } from "@/deemix/deemix";
import { NextApiRequest, NextApiResponse } from "next";

const getArtist = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    // Ejecuta todas las promesas simultáneamente
    const [artist, top10, albums, related, playlist] = await Promise.all([
      deezerInstance.api.get_artist(id as number | string),
      deezerInstance.api.get_artist_top(id as number | string),
      deezerInstance.api.get_artist_albums(id as number | string),
      deezerInstance.api.get_artist_related(id as number | string),
      deezerInstance.api.get_artist_playlists(id as number | string),
    ]);

    const artistInfo = {
      artist,
      top10,
      albums,
      related,
      playlist,
    };

    res.status(200).json(artistInfo);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos del artista" });
  }
};

export default getArtist;
