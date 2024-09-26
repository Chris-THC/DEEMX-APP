import { Button } from "@/components/ui/button";
import { PlaylistFull } from "@/interfaces/playlist/playlist";
import { Heart, MoreHorizontal, Play } from "lucide-react";
import React from "react";

interface HeaderInfo {
  playlist: PlaylistFull;
}

const HeaderPlaylist: React.FC<HeaderInfo> = ({ playlist }) => {
  
  if (!playlist) return <></>;

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      <div className="flex-shrink-0">
        <img
          src={playlist.picture_xl}
          alt={playlist.title}
          className="w-60 h-60 object-cover rounded-md shadow-md"
          height="240"
          style={{
            aspectRatio: "240/240",
            objectFit: "cover",
          }}
          width="240"
        />
      </div>
      <div className="flex flex-col justify-end">
        <h1 className="text-5xl font-bold mb-2 text-gray-900">
          {playlist.title}
        </h1>
        <p className="text-gray-600 mb-4">
          {` Creado by ${playlist.creator.name} • ${playlist.nb_tracks} canciones`}
        </p>
        <div className="flex items-center gap-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-2">
            <Play className="mr-2 h-5 w-5" />
            Reproducir
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Heart className="h-6 w-6 text-gray-600" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <MoreHorizontal className="h-6 w-6 text-gray-600" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderPlaylist;
