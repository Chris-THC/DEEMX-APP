import { AlbumFull } from "@/interfaces/album/Album";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const albumInFn = async (idAlbum: string | number): Promise<AlbumFull> => {
  try {
    const response = await axios.get(`/api/album?id=${idAlbum}`);
    return response.data;
  } catch (error) {
    console.log("Algo pasó", error);
    throw new Error("Error al obtener los datos del artista");
  }
};

export const useAlbum = (idAlbum: string | number): UseQueryResult<AlbumFull> => {
  return useQuery({
    queryKey: ["getAlbum", idAlbum],  // Incluye idArtist en el queryKey
    queryFn: () => albumInFn(idAlbum),
    // Opcionalmente puedes agregar enabled para asegurarte de que solo se ejecute si idArtist está definido
    enabled: !!idAlbum,
  });
};
