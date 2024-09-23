import { AlbumFull } from "@/interfaces/album/Album";
import { PlaylistFull } from "@/interfaces/playlist/playlist";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const playlistInFn = async (idPlaylist: string | number): Promise<PlaylistFull> => {
  try {
    const response = await axios.get(`/api/playlist?id=${idPlaylist}`);
    return response.data;
  } catch (error) {
    console.log("Algo pasó", error);
    throw new Error("Error al obtener los datos del artista");
  }
};

export const usePlaylist = (idPlaylist: string | number): UseQueryResult<PlaylistFull> => {
  return useQuery({
    queryKey: ["getAlbum", idPlaylist],  
    queryFn: () => playlistInFn(idPlaylist),
    enabled: !!idPlaylist,
  });
};
