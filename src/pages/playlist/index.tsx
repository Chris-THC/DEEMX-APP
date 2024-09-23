import { usePlaylist } from "@/hooks/playlist/UsePlayList";
import IsLoadingComponent from "@/other/isLoading/IsloadingComponent";
import { storePlaylist } from "@/store/playlist/PlaylistStore";
import HeaderPlaylist from "./components/HeaderPlaylist";
import PlaylistTracks from "./components/PlaylistTracks";

const PlaylistScreen = () => {
  const { idPlaylist } = storePlaylist();
  const { data: playListArr, isLoading } = usePlaylist(idPlaylist);

  if (isLoading) {
    return <IsLoadingComponent />;
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
