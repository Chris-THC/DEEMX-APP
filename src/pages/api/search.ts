import { deezerInstance } from "@/deemix/deemix";
import { NextApiRequest, NextApiResponse } from "next";

const getSearch = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { search } = req.query;

    // Ejecuta todas las promesas simultáneamente
    const [artistByS, tracksByS, albumsByS, playlistsByS] = await Promise.all([
      deezerInstance.api.search_artist(search as string),
      deezerInstance.api.search_track(search as string),
      deezerInstance.api.search_album(search as string),
      deezerInstance.api.search_playlist(search as string),
    ]);

    // Limita los resultados de artistByS a un máximo de 10 elementos
    const limitedArtistByS = artistByS?.data?.slice(0, 5) || [];

    const searchInfo = {
      artistByS: limitedArtistByS,
      tracksByS,
      albumsByS,
      playlistsByS,
    };

    res.status(200).json(searchInfo);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos del artista" });
  }
};

export default getSearch;
