import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const getPlaylist = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const playList = await axios.get(`https://api.deezer.com/playlist/${id}`);
    res.status(200).json(playList.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los datos de la playlist" });
  }
};

export default getPlaylist;
