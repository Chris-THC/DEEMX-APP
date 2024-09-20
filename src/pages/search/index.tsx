import { Card } from "@/components/ui/card";
import { useSearch } from "@/hooks/search/UseSearch";
import IsLoadingComponent from "@/other/isLoading/IsloadingComponent";
import { storeSearch } from "@/store/search/SearchStore";
import AlbumsBySearch from "./components/AlbumsCradSearch";
import ArtistCardSearch from "./components/ArtistCardSearch";
import PlaylistBySearch from "./components/PlaylistSearch";
import SimilarArtistCard from "./components/SimilarArtist";
import TrackCardSearch from "./components/TrackCradSearch";

const SearchMain = () => {
  const { searchText } = storeSearch();
  const { data: searchInf, isLoading } = useSearch(searchText);

  if (isLoading) {
    return <IsLoadingComponent />;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ArtistCardSearch artist={searchInf?.artistByS[0]!} />
        <div>
          <div className="grid grid-cols-3 gap-5">
            {searchInf ? (
              <Card className="col-span-2 row-span-3">
                <TrackCardSearch trackList={searchInf?.tracksByS!} />
              </Card>
            ) : (
              <></>
            )}

            {searchInf ? (
              <Card>
                <SimilarArtistCard artistsList={searchInf?.artistByS!} />
              </Card>
            ) : (
              <></>
            )}
          </div>
          <div>
            {searchInf ? (
              <AlbumsBySearch albumList={searchInf?.albumsByS!} />
            ) : (
              <></>
            )}
          </div>
          <div>
            {searchInf ? (
              <PlaylistBySearch playListArr={searchInf?.playlistsByS!} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchMain;
