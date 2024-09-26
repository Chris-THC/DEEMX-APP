import { Card, CardContent } from "@/components/ui/card";
import { Albums } from "@/interfaces/artist/Artist";
import { formatDate } from "@/other/formartDate/FormartDate";
import { storeAlbum } from "@/store/album/AlbumStore";
import { useRouter } from "next/router";
import React from "react";

interface AlbumProps {
  albumList: Albums;
}

const AlbumsByArtist: React.FC<AlbumProps> = ({ albumList }) => {
  const { setIdAlbum } = storeAlbum();
  const router = useRouter();

  const handleNavigationAlbum = (route: string, idAlbum: number) => {
    setIdAlbum(idAlbum);
    router.push(route);
  };

  if (!albumList) return <></>;
  
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mt-4">Albums</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {albumList.data.slice(0, 18).map((album, index) => (
          <Card
            key={index}
            onClick={() => handleNavigationAlbum(`/album`, album.id)}
            className="overflow-hidden cursor-pointer"
          >
            <img
              src={album.cover_big}
              alt={`${album.title} cover`}
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <CardContent className="p-2">
              <h2 className="text-sm font-semibold truncate">{album.title}</h2>
              <p className="text-xs text-gray-500 mt-1">
                Publicado en {formatDate(album.release_date)}
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

export default AlbumsByArtist;
