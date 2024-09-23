import { Genre } from "@/interfaces/musicGenres/MusicGenre";
import { TopAlbum } from "@/interfaces/topAlbums/TopAlbums";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

const topAlbums = async (): Promise<TopAlbum[]> => {
  try {
    const response = await axios.get(`/api/topalbums`);
    return response.data;
  } catch (error) {
    console.log("Algo pasó", error);
    throw new Error("Error al obtener los datos del artista");
  }
};

export const UseTopAlbums = (): UseQueryResult<TopAlbum[]> => {
  return useQuery({
    queryKey: ["infoTopAlbums"],
    queryFn: topAlbums,
  });
};
