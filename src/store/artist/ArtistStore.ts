import { create } from "zustand";

interface ArtistInf {
  idArtist: number | string;
  setIdArtist: (idArtist: number | string) => void;
}

export const storeArtistInfo = create<ArtistInf>((set) => ({
  idArtist: "",
  setIdArtist: (artistId: number | string): void =>
    set(() => ({
      idArtist: artistId,
    })),
}));
