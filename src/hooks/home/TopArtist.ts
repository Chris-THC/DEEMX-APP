import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchDeezerTopArtist = async () => {
  try {
    const response = await axios.get(`/api/deezer`);
    console.log(response.data); // Agrega este log para verificar los datos en el cliente
    return response.data;
  } catch (error) {
    console.log("Algo pasó", error);
    throw new Error("Error al obtener los datos del artista");
  }
};

export const useDeezerArtistTop = (): UseQueryResult<any> => {
  return useQuery({
    queryKey: ["infoArtist"],
    queryFn: fetchDeezerTopArtist,
  });
};
