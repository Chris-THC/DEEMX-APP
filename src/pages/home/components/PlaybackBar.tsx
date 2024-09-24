import { Button } from "@/components/ui/button";
import { useDownloadTrack } from "@/hooks/downloader/Downloader";
import DownloadPanel from "@/other/downloadPanel/DownloadPanel";
import { storeTrackPlayer } from "@/store/audioPlayer/AudioPlayerStore";
import { TrackCardStore, storeTrack } from "@/store/track/TrackStore";
import { Pause, Play, Shuffle, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const PlaybackBar = () => {
  const downloader = useDownloadTrack();
  const { setTrackToDonw } = storeTrack();

  const { trackStreaming } = storeTrackPlayer();
  const [songIndex, setSongIndex] = useState(0);
  const { load, playing, play, pause } = useGlobalAudioPlayer();

  useEffect(() => {
    if (!trackStreaming) {
      console.log("Faltan datos");
    } else {
      load(trackStreaming?.preview!, {
        autoplay: true,
        onend: () => setSongIndex(songIndex + 1),
      });
    }
  }, [trackStreaming?.id]);

  return (
    <div className="bg-card border-t h-20 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={
            trackStreaming?.cover
              ? trackStreaming.cover
              : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-design-template-c07169dc0c1f59bd0c134af2590844c0_screen.jpg?ts=1633490872"
          }
          alt={trackStreaming?.title || "Default Cover"}
          className="w-12 h-12 rounded mr-4"
        />

        <div>
          <h4 className="font-semibold">
            {!trackStreaming ? "Titulo" : trackStreaming.title}
          </h4>
          <p className="text-sm text-muted-foreground">
            {!trackStreaming ? "Artista" : trackStreaming.artist}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Shuffle className="h-4 w-4" />
        </Button>
        <Button
          onClick={() => setSongIndex(songIndex - 1)}
          variant="ghost"
          size="icon"
        >
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button variant="default" size="icon" className="rounded-full">
          {playing ? (
            <Pause className="h-5 w-10" onClick={pause} />
          ) : (
            <Play className="h-5 w-10" onClick={play} />
          )}
        </Button>
        <Button
          onClick={() => setSongIndex(songIndex + 1)}
          variant="ghost"
          size="icon"
        >
          <SkipForward className="h-4 w-4" />
        </Button>

        <div className="max-w-36">
          <DownloadPanel
            onDownload={() => {
              if (!trackStreaming) return;

              const objectToCard: TrackCardStore = {
                title: trackStreaming.title,
                artist: trackStreaming.artist,
                coverUrl: trackStreaming.cover,
              };

              setTrackToDonw(objectToCard);
              downloader.mutate(trackStreaming.id.toString());
            }}
          />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-40"></div>
      </div>
    </div>
  );
};

export default PlaybackBar;
