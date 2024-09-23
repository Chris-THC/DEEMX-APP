import { useDownloadTrack } from "@/hooks/downloader/Downloader";
import { AlbumFull } from "@/interfaces/album/Album";
import { SecondsToMinutes } from "@/other/SecToMin/SecToMin";
import DownloadPanel from "@/other/downloadPanel/DownloadPanel";
import { TrackCardStore, storeTrack } from "@/store/track/TrackStore";
import { Play } from "lucide-react";
import React from "react";

interface TrackProp {
  trackList: AlbumFull;
}

const TracksList: React.FC<TrackProp> = ({ trackList }) => {
  const downloader = useDownloadTrack();
  const { setTrackToDonw } = storeTrack();

  return (
    <div className="w-full p-4 bg-[#f3f4f6]">
      {!trackList ? (
        <></>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold mb-4">Lista de canciones</h2>
          </div>
          <div>
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="px-6 py-3">#</th>
                  <th className="px-6 py-3">Track</th>
                  <th className="px-6 py-3">Artista</th>
                  <th className="px-6 py-3">Duración</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {trackList.album.tracks.data.map((track, idx) => {
                  return (
                    <tr
                      key={idx}
                      className="hover:bg-[#e1dde4] transition-colors duration-200 font-semibold"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">{idx + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 relative">
                            <img
                              className="h-15 w-15 rounded"
                              src={track.album.cover_big}
                              alt={`${track.id}`}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                              <Play className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 max-w-[350px] overflow-hidden whitespace-nowrap overflow-ellipsis">
                              {track.title}
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
                        <div className="text-sm text-gray-900">
                          {track.artist.name}
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
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default TracksList;
