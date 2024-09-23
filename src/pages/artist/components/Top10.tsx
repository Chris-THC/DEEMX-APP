import { Button } from "@/components/ui/button";
import { Top10 } from "@/interfaces/artist/Artist";
import { SecondsToMinutes } from "@/other/SecToMin/SecToMin";
import { MoreHorizontal, Play } from "lucide-react";

interface TrackProp {
  trackList: Top10;
}

const Top10TracksByArtist: React.FC<TrackProp> = ({ trackList }) => {
  return (
    <div className="container mx-auto p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold mb-4">Top 10 más escuchados</h2>
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
            {trackList.data.slice(0, 5).map((track) => (
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
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                        <Play className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
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
                  <div className="text-sm font-medium text-gray-900 max-w-[250px] overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {track.album.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {SecondsToMinutes(track.duration)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
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
