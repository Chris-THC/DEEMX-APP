import { Button } from "@/components/ui/button";
import { AlbumFull } from "@/interfaces/album/Album";
import { storeArtistInfo } from "@/store/artist/ArtistStore";
import { Play } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

interface HeaderProp {
  album: AlbumFull;
}

const HeaderInfo: React.FC<HeaderProp> = ({ album }) => {
  const { setIdArtist } = storeArtistInfo();
  const router = useRouter();

  const handleNavigationArtist = (route: string, artistId: number) => {
    setIdArtist(artistId);
    router.push(route);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <img
        src={album?.album.cover_xl}
        alt={album?.album.title}
        width={250}
        height={250}
        className="rounded-lg shadow-lg"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-2">{album?.album.title}</h1>
          <div className="flex items-center gap-2 mb-1">
            <img
              src={album.album.artist.picture_medium}
              alt={album.album.artist.name}
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
              onClick={() => {
                handleNavigationArtist("/artist", album.album.artist.id);
              }}
            />
            <span
              onClick={() => {
                handleNavigationArtist("/artist", album.album.artist.id);
              }}
              className="text-lg font-semibold cursor-pointer"
            >
              {album?.album.artist.name}
            </span>
          </div>
          <p className="text-base text-muted-foreground text-black">
            {`${album?.album.nb_tracks} canciones | ${album?.album.release_date} | ${album?.album.fans} fans`}
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <Button size="lg" className="rounded-full">
            <Play className="mr-2 h-4 w-4" /> Play
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
