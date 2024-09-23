import { Genre } from "@/interfaces/musicGenres/MusicGenre";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

const MusicGenres = async (): Promise<Genre[]> => {
  try {
    const response = await axios.get(`/api/musicgenres`);
    return response.data;
  } catch (error) {
    console.log("Algo pasó", error);
    throw new Error("Error al obtener los datos del artista");
  }
};

export const UseMusicGenres = (): UseQueryResult<Genre[]> => {
  return useQuery({
    queryKey: ["infoArtist"],
    queryFn: MusicGenres,
  });
};
