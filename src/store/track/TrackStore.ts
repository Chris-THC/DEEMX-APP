import { create } from "zustand";

export interface TrackCardStore {
  title: string;
  artist: string;
  coverUrl: string;
}

interface TrackStore {
  trackToDonw: TrackCardStore | null;
  setTrackToDonw: (track: TrackCardStore) => void;
}

export const storeTrack = create<TrackStore>((set) => ({
  trackToDonw: null,
  setTrackToDonw: (track: TrackCardStore): void =>
    set(() => ({
      trackToDonw: track,
    })),
}));
