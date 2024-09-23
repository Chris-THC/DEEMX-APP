import { create } from "zustand";

interface PlaylistStore {
  idPlaylist: number;
  setIdPlaylist: (playListId: number) => void;
}

export const storePlaylist = create<PlaylistStore>((set) => ({
  idPlaylist: 0,
  setIdPlaylist: (playlistId: number): void =>
    set(() => ({
      idPlaylist: playlistId,
    })),
}));
