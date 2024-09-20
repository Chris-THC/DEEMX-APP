import { Card } from "@/components/ui/card";
import { useSearch } from "@/hooks/search/UseSearch";
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
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {!searchInf ? (
        <div> NO hay datos</div>
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ArtistCardSearch artist={searchInf.artistByS[0]} />
          <div>
            <div className="grid grid-cols-3 gap-5">
              <Card className="col-span-2 row-span-3">
                <TrackCardSearch trackList={searchInf?.tracksByS!} />
              </Card>
              <Card>
                <SimilarArtistCard artistsList={searchInf?.artistByS!} />
              </Card>
            </div>
            <div>
              <AlbumsBySearch albumList={searchInf?.albumsByS!} />
            </div>
            <div>
              <PlaylistBySearch playListArr={searchInf?.playlistsByS!} />
            </div>
            O
          </div>
        </main>
      )}
    </div>
  );
};

export default SearchMain;
