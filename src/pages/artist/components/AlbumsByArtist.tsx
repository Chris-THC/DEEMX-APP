import { Card, CardContent } from "@/components/ui/card";
import { Albums } from "@/interfaces/artist/Artist";
import { formatDate } from "@/other/formartDate/formartDate";
import React from "react";

const albums = [
  {
    title: "Don't Get Too Close",
    artist: "Skrillex",
    releaseDate: "02/18/2023",
    cover: "/placeholder.svg?height=200&width=200",
    explicit: true,
  },
  {
    title: "Quest For Fire",
    artist: "Skrillex",
    releaseDate: "02/17/2023",
    cover: "/placeholder.svg?height=200&width=200",
    explicit: true,
  },
  {
    title: "Skrillex and Diplo present Jack Ü",
    artist: "Jack Ü, Skrillex, Diplo",
    releaseDate: "02/24/2015",
    cover: "/placeholder.svg?height=200&width=200",
    explicit: true,
  },
  {
    title: "Take Ü There (feat. Kiesza) (Remixes)",
    artist: "Jack Ü, Skrillex, Diplo, Kiesza",
    releaseDate: "12/23/2014",
    cover: "/placeholder.svg?height=200&width=200",
    explicit: false,
  },
  {
    title: "Make It Bun Dem After Hours EP",
    artist: "Skrillex, Damian Marley",
    releaseDate: "08/28/2012",
    cover: "/placeholder.svg?height=200&width=200",
    explicit: false,
  },
  {
    title: "Bangarang EP",
    artist: "Skrillex",
    releaseDate: "11/08/2011",
    cover: "/placeholder.svg?height=200&width=200",
    explicit: true,
  },
];

interface AlbumProps {
  albumList: Albums;
}

const AlbumsByArtist: React.FC<AlbumProps> = ({ albumList }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mt-4">Albums</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {albumList.data.slice(0, 18).map((album, index) => (
          <Card key={index} className="overflow-hidden">
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
