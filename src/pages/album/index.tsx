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
    <div className="bg-[#f3f4f6] text-foreground">
      {!albumData ? (
        <div className="bg-[#f3f4f6] text-foreground p-6 max-w-4xl mx-auto"></div>
      ) : (
        <>
          <div className="p-6 max-w-4xl mx-auto">
            <HeaderInfo album={albumData} />
          </div>
          <div className="mx-32">
            <TracksList trackList={albumData} />
          </div>
        </>
      )}
    </div>
  );
};

export default Album;
