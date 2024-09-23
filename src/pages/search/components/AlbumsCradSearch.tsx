import { Card, CardContent } from "@/components/ui/card";
import { AlbumsByS } from "@/interfaces/search/Search";
import { storeAlbum } from "@/store/album/AlbumStore";
import { storeArtistInfo } from "@/store/artist/ArtistStore";
import { useRouter } from "next/router";
import React from "react";

interface AlbumProps {
  albumList: AlbumsByS;
}

const AlbumsBySearch: React.FC<AlbumProps> = ({ albumList }) => {
  const router = useRouter();
  const { setIdAlbum } = storeAlbum();
  const { setIdArtist } = storeArtistInfo();

  const handleNavigationArtist = (route: string, idArtist: number) => {
    setIdArtist(idArtist);
    router.push(route);
  };

  const handleNavigationAlbum = (route: string, idAlbum: number) => {
    setIdAlbum(idAlbum);
    router.push(route);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mt-4">Albums</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {albumList.data.slice(0, 18).map((album, index) => (
          <Card key={index} className="overflow-hidden">
            <img
              onClick={() => {
                handleNavigationAlbum("/album", album.id);
              }}
              src={album.cover_big}
              alt={`${album.title} cover`}
              width={200}
              height={200}
              className="w-full h-auto cursor-pointer"
            />
            <CardContent className="p-2">
              <h2
                onClick={() => {
                  handleNavigationAlbum("/album", album.id);
                }}
                className="text-sm font-semibold truncate cursor-pointer"
              >
                {album.title}
              </h2>
              <p
                onClick={() => {
                  handleNavigationArtist("/artist", album.artist.id);
                }}
                className="text-xs text-gray-500 mt-1 cursor-pointer"
              >
                {album.artist.name}
              </p>
              {album.explicit_lyrics && (
                <span className="inline-block bg-gray-200 rounded px-1 py-0.5 text-[10px] font-semibold text-gray-700 mt-1">
                  EXPLICIT
                </span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AlbumsBySearch;
