import axios from "axios";
import { TopArtists } from "@/interfaces/topArtists/TopArtist";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

const TopArtist = async (): Promise<TopArtists[]> => {
  try {
    const response = await axios.get(`/api/topartists`);
    return response.data;
  } catch (error) {
    console.log("Algo pasó", error);
    throw new Error("Error al obtener los datos del artista");
  }
};

export const useTopArtists = (): UseQueryResult<TopArtists[]> => {
  return useQuery({
    queryKey: ["TopArtist"],
    queryFn: TopArtist,
  });
};
