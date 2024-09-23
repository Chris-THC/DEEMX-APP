import { create } from "zustand";

interface DownloadSuccessStore {
  isDownloadSucces: boolean;
  setIsDownloadSucces: (isSucces: boolean) => void;
}

export const storeDownloadSuccess = create<DownloadSuccessStore>((set) => ({
  isDownloadSucces: false,
  setIsDownloadSucces: (isSucces: boolean): void =>
    set(() => ({
      isDownloadSucces: isSucces,
    })),
}));
