import { UseMusicGenres } from "@/hooks/musicGenre/UseMusicGenres";
import PlaybackBar from "./components/PlaybackBar";
import Releases from "./components/Releases";
import SidebarApp from "./components/Sidebar";
import TopAlbums from "./components/TopAlbums";
import TopTracks from "./components/TopTracks";

export default function HomeScreen() {
  // const { data } = useDeezerArtistTop();
  const { data: musicgenres, isLoading } = UseMusicGenres();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  console.info(musicgenres?.[1]?.picture_xl);

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <div className="bg-sky-600 h-[60px] flex flex-col justify-center items-start ">
        <h1 className="text-3xl font-bold ml-3">DEEMX</h1>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <SidebarApp />
        <main className="flex-1 overflow-auto">
          <div className="ml-8">
            <Releases genre={musicgenres!} />
          </div>
          <TopTracks />
          <TopAlbums />
          {/* <TopArtist artistInfo={data} /> */}
        </main>
      </div>

      <PlaybackBar />
    </div>
  );
}
