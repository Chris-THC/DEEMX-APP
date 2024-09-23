import { usePlaylist } from "@/hooks/playlist/UsePlayList";
import { storePlaylist } from "@/store/playlist/PlaylistStore";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import HeaderPlaylist from "./components/HeaderPlaylist";
import PlaylistTracks from "./components/PlaylistTracks";

const PlaylistScreen = () => {
  const { idPlaylist } = storePlaylist();
  const { data: playListArr, isLoading } = usePlaylist(idPlaylist);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      {!playListArr ? (
        <></>
      ) : (
        <>
          <HeaderPlaylist playlist={playListArr} />

          <div className="mx-10">
            <PlaylistTracks trackList={playListArr} />
          </div>
        </>
      )}
    </div>
  );
};

export default PlaylistScreen;
