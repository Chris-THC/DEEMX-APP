import { Button } from "@/components/ui/button";
import { useDownloadTrack } from "@/hooks/downloader/Downloader";
import { Top10 } from "@/interfaces/artist/Artist";
import { TrackStorePlayer } from "@/interfaces/player/TrackPlay";
import { SecondsToMinutes } from "@/other/SecToMin/SecToMin";
import DownloadPanel from "@/other/downloadPanel/DownloadPanel";
import { storeAlbum } from "@/store/album/AlbumStore";
import { storeTrackPlayer } from "@/store/audioPlayer/AudioPlayerStore";
import { TrackCardStore, storeTrack } from "@/store/track/TrackStore";
import { Play } from "lucide-react";
import { useRouter } from "next/router";

interface TrackProp {
  trackList: Top10;
}

const Top10TracksByArtist: React.FC<TrackProp> = ({ trackList }) => {
  const { setIdAlbum } = storeAlbum();
  const router = useRouter();
  const downloader = useDownloadTrack();
  const { setTrackToDonw } = storeTrack();
  const { setTrackStreaming } = storeTrackPlayer();

  const handleNavigationAlbum = (route: string, idAlbum: number) => {
    setIdAlbum(idAlbum);
    router.push(route);
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold mb-4">Top más escuchados</h2>
        <Button variant="outline">View all</Button>
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <th className="px-6 py-3">Track</th>
              <th className="px-6 py-3">Album</th>
              <th className="px-6 py-3">Duración</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {trackList.data.slice(0, 10).map((track) => (
              <tr
                key={track.id}
                className="hover:bg-[#e1dde4] transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 relative">
                      <img
                        className="h-15 w-15 rounded"
                        src={track.album.cover_big}
                        alt={`${track.id}`}
                      />
                      <div
                        onClick={() => {
                          const trackPlay: TrackStorePlayer = {
                            id: track.id,
                            title: track.title_short,
                            artist: track.artist.name,
                            cover: track.album.cover_big,
                            preview: track.preview,
                          };
                          setTrackStreaming(trackPlay);
                        }}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
                      >
                        <Play className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="ml-4 max-w-[180px]">
                      <div className="text-sm font-medium text-gray-900 overflow-hidden whitespace-nowrap overflow-ellipsis">
                        {track.title_short}
                      </div>
                      {track.explicit_lyrics ? (
                        <span className="inline-block bg-gray-200 rounded px-1 py-0.5 text-xs font-semibold text-gray-700 mr-2">
                          EXPLICIT
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    onClick={() => {
                      handleNavigationAlbum("/album", track.album.id);
                    }}
                    className="text-sm font-medium text-gray-900 max-w-[180px] overflow-hidden whitespace-nowrap overflow-ellipsis cursor-pointer"
                  >
                    {track.album.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {SecondsToMinutes(track.duration)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <DownloadPanel
                    onDownload={() => {
                      const objectToCard: TrackCardStore = {
                        title: track.title,
                        artist: track.artist.name,
                        coverUrl: track.album.cover_big,
                      };
                      setTrackToDonw(objectToCard);

                      downloader.mutate(track.id.toString());
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Top10TracksByArtist;
