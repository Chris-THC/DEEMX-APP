import { deezerInstance } from '@/deemix/deemix';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const { artistId } = req.query; // Puedes pasar el ID del artista en la query string
    const topArtistData = await deezerInstance.api.get_artist("27");
    console.log("si hace la consulta");
    
    res.status(200).json(topArtistData);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos del artista" });
  }
}
