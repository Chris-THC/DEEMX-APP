import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const getTopAlbumsDeezer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const topAlbums = await axios.get("https://api.deezer.com/chart/0/albums");
    res.status(200).json(topAlbums.data.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos del artista" });
  }
};

export default getTopAlbumsDeezer;
