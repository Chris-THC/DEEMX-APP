import { useAlbum } from "@/hooks/album/Album";
import IsLoadingComponent from "@/other/isLoading/IsloadingComponent";
import { storeAlbum } from "@/store/album/AlbumStore";
import HeaderInfo from "./components/HeaderInfo";
import TracksList from "./components/TracksList";

const Album = () => {
  const { idAlbum } = storeAlbum();
  const { data: albumData, isLoading } = useAlbum(idAlbum);

  if (isLoading) return <IsLoadingComponent />;

  return (
    <div className="bg-background text-foreground p-6 max-w-4xl mx-auto">
      {!albumData ? (
        <div className="bg-background text-foreground p-6 max-w-4xl mx-auto"></div>
      ) : (
        <div>
          <HeaderInfo album={albumData} />
          <TracksList trackList={albumData} />
        </div>
      )}
    </div>
  );
};

export default Album;
