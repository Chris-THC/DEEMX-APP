// pages/index.tsx (HomeScreen)
import { useTopArtists } from "@/hooks/Topartist/UseTopArtist";
import { UseMusicGenres } from "@/hooks/musicGenre/UseMusicGenres";
import { UseTopAlbums } from "@/hooks/topAlbums/UseTopAlbums";
import { UseTopTracks } from "@/hooks/topTracks/UseTopTracks";
import IsLoadingComponent from "@/other/isLoading/IsloadingComponent";
import Releases from "./components/Releases";
import TopAlbums from "./components/TopAlbums";
import TopArtist from "./components/TopArtist";
import TopTracks from "./components/TopTracks";

export default function HomeScreen() {
  const { data: musicgenres, isLoading } = UseMusicGenres();
  const { data: topArtist } = useTopArtists();
  const { data: topTracks } = UseTopTracks();
  const { data: topAlbums } = UseTopAlbums();

  if (isLoading) {
    return <IsLoadingComponent />;
  }

  return (
    <div>
      <div className="ml-8">
        <TopArtist artistList={topArtist!} />
      </div>

      <div className="ml-8">
        {topTracks ? (
          <TopTracks trackList={topTracks} />
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div className="ml-8">
        {topAlbums ? (
          <TopAlbums topAlbums={topAlbums} />
        ) : (
          <div>Loading...</div>
        )}
      </div>

      {/* <div className="ml-8">
        <Releases genre={musicgenres!} />
      </div> */}
    </div>
  );
}
