import { create } from "zustand";

interface AlbumStore {
  idAlbum: number;
  setIdAlbum: (idAlbum: number) => void;
}

export const storeAlbum = create<AlbumStore>((set) => ({
  idAlbum: 0,
  setIdAlbum: (idAlbum: number): void =>
    set(() => ({
      idAlbum: idAlbum,
    })),
}));
