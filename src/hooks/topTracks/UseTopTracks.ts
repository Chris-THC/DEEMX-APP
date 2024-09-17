import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

const TopTracks = async (): Promise<Track[]> => {
  try {
    const response = await axios.get(`/api/toptracks`);
    return response.data;
  } catch (error) {
    console.log("Algo pasó", error);
    throw new Error("Error al obtener los datos del artista");
  }
};

export const UseTopTracks = (): UseQueryResult<Track[]> => {
  return useQuery({
    queryKey: ["TopTrack"],
    queryFn: TopTracks,
  });
};
