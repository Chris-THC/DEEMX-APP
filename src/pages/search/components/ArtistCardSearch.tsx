import { Card, CardContent } from "@/components/ui/card";
import { ArtistByS } from "@/interfaces/search/Search";
import { storeArtistInfo } from "@/store/artist/ArtistStore";
import { useRouter } from "next/router";
import React from "react";

interface CardInfo {
  artist: ArtistByS;
}

const ArtistCardSearch: React.FC<CardInfo> = ({ artist }) => {
  const { setIdArtist } = storeArtistInfo();
  const router = useRouter();
  
  const handleNavigationArtist = (route: string) => {
    setIdArtist(artist.id);
    router.push(route);
  };

  if (!artist) {
    return <></>;
  }
  return (
    <section className="mb-2">
      <Card className="overflow-hidden">
        <CardContent className="p-0 relative">
          <img
            src={artist.picture_xl}
            alt={artist.name}
            className="w-full h-80 object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6">
            <div className="text-white">
              <img
                src={artist.picture_xl}
                alt={artist.name}
                height={200}
                width={200}
                className="rounded-[8px] shadow-lg"
              />

              <h3
                onClick={() => handleNavigationArtist("/artist")}
                className="cursor-pointer text-3xl font-bold mb-2"
              >
                {artist.name}
              </h3>
              <p className="text-lg">
                {artist.nb_fan.toLocaleString()} fans · {artist.nb_album} albums
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ArtistCardSearch;
