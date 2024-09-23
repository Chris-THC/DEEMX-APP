import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const getGenresFromDeezer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get("https://api.deezer.com/genre");
    const genre = response.data.data.slice(1);
    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos del artista" });
  }
};


export default getGenresFromDeezer;
