import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TopAlbum } from "@/interfaces/topAlbums/TopAlbums";
import { storeAlbum } from "@/store/album/AlbumStore";
import { storeArtistInfo } from "@/store/artist/ArtistStore";
import Autoplay from "embla-carousel-autoplay";
import { Heart, MoreHorizontal, Play } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

interface AlbumCardProps {
  album: TopAlbum;
}

interface AlbumList {
  topAlbums: TopAlbum[];
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const { setIdArtist } = storeArtistInfo();
  const { setIdAlbum } = storeAlbum();
  const router = useRouter();

  const handleNavigationArtist = (route: string, idArtist: number) => {
    setIdArtist(idArtist);
    router.push(route);
  };

  const handleNavigationAlbum = (route: string, idAlbum: number) => {
    setIdAlbum(idAlbum);
    router.push(route);
  };

  if (!album) return <></>;

  return (
    <Card className="w-[320px] bg-gradient-to-b from-blue-400 to-blue-600 text-white min-w-[240px] md:min-w-[250px] rounded-lg overflow-hidden shadow-lg mx-3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardContent className="p-0">
        <div className="relative group">
          <img
            src={album.cover_big}
            alt={album.title}
            width={250}
            height={250}
            className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 h-[263px]">
            <Button
              onClick={() => handleNavigationAlbum("/album", album.id)}
              size="icon"
              variant="secondary"
              className="rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-transform duration-300 transform scale-0 group-hover:scale-100"
            >
              <Play className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h2 className="font-bold text-lg truncate">{album.title}</h2>
          <div className="flex items-center mt-2">
            <img
              onClick={() => handleNavigationArtist("/artist", album.artist.id)}
              src={album.artist.picture_medium}
              alt={album.artist.name}
              width={24}
              height={24}
              className="rounded-full mr-2 border-2 border-white cursor-pointer"
            />
            <span
              onClick={() => handleNavigationArtist("/artist", album.artist.id)}
              className="text-sm truncate cursor-pointer"
            >
              {album.artist.name}
            </span>
          </div>
        </div>
      </CardContent>
      <div className="absolute top-2 right-2 flex space-x-2">
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:text-red-500 hover:bg-white/20"
        >
          <Heart className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:text-white hover:bg-white/20"
        >
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  );
};

const TopAlbums: React.FC<AlbumList> = ({ topAlbums }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  if (!topAlbums) return <></>;

  return (
    <section className="pb-8 mx-4">
      <h2 className="text-2xl font-semibold mb-4">Top álbumes</h2>

      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-[96%]"
      >
        <CarouselContent className="pl-4">
          {topAlbums.map((album, idx) => (
            <AlbumCard key={idx} album={album} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default TopAlbums;
