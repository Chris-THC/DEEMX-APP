import { useTopArtists } from "@/hooks/artist/UseTopArtist";
import { UseMusicGenres } from "@/hooks/musicGenre/UseMusicGenres";
import { UseTopAlbums } from "@/hooks/topAlbums/UseTopAlbums";
import { UseTopTracks } from "@/hooks/topTracks/UseTopTracks";
import PlaybackBar from "./components/PlaybackBar";
import Releases from "./components/Releases";
import SidebarApp from "./components/Sidebar";
import TopAlbums from "./components/TopAlbums";
import TopArtist from "./components/TopArtist";
import TopTracks from "./components/TopTracks";

export default function HomeScreen() {
  const { data: musicgenres, isLoading } = UseMusicGenres();
  const { data: topArtist } = useTopArtists();
  const { data: topTracks } = UseTopTracks();
  const { data: topAlbums } = UseTopAlbums();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  console.info(topAlbums);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <div className="bg-blue-600 h-[60px] flex flex-col justify-center items-start ">
        <h1 className="text-3xl font-bold ml-3 text-[#fff]">DEEMX</h1>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <SidebarApp />
        <main className="flex-1 overflow-auto">
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

          <div className="ml-8">
            <Releases genre={musicgenres!} />
          </div>
        </main>
      </div>

      <PlaybackBar />
    </div>
  );
}
