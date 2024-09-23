import { deezerInstance } from "@/deemix/deemix";
import { NextApiRequest, NextApiResponse } from "next";

const getAlbum = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const [album] = await Promise.all([
      deezerInstance.api.get_album(id as number | string),
    ]);
    const artistInfo = {
      album,
    };
    res.status(200).json(artistInfo);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos del artista" });
  }
};

export default getAlbum;
