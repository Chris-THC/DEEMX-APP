import { TrackStorePlayer } from "@/interfaces/player/TrackPlay";
import { create } from "zustand";

interface TrackPlayerStore {
  trackStreaming: TrackStorePlayer | null;
  setTrackStreaming: (track: TrackStorePlayer) => void;
}

export const storeTrackPlayer = create<TrackPlayerStore>((set) => ({
  trackStreaming: null,
  setTrackStreaming: (track: TrackStorePlayer): void =>
    set(() => ({
      trackStreaming: track,
    })),
}));
