import { ArtistFull } from "@/interfaces/artist/Artist";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const artistInFn = async (idArtist: string | number): Promise<ArtistFull> => {
  try {
    const response = await axios.get(`/api/artist?id=${idArtist}`);
    return response.data;
  } catch (error) {
    console.log("Algo pasó", error);
    throw new Error("Error al obtener los datos del artista");
  }
};

export const useArtist = (idArtist: string | number): UseQueryResult<ArtistFull> => {
  return useQuery({
    queryKey: ["getArtist", idArtist],  // Incluye idArtist en el queryKey
    queryFn: () => artistInFn(idArtist),
    // Opcionalmente puedes agregar enabled para asegurarte de que solo se ejecute si idArtist está definido
    enabled: !!idArtist,
  });
};
