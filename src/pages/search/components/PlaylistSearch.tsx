import { Card, CardContent } from "@/components/ui/card";
import { PlaylistsByS } from "@/interfaces/search/Search";
import React from "react";

interface AlbumProps {
  playListArr: PlaylistsByS;
}

const PlaylistBySearch: React.FC<AlbumProps> = ({ playListArr }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mt-4">Playlist</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {playListArr.data.slice(0, 18).map((playlist, index) => (
          <Card key={index} className="overflow-hidden">
            <img
              src={playlist.picture_big}
              alt={`${playlist.title} cover`}
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <CardContent className="p-2">
              <h2 className="text-sm font-semibold truncate">
                {playlist.title}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Publicado por {playlist.user.name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlaylistBySearch;
