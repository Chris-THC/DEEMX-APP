import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const getTopTracksDeezer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const topArtists = await axios.get("https://api.deezer.com/chart/0/tracks");
    res.status(200).json(topArtists.data.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la pistas" });
  }
};


export default getTopTracksDeezer;
