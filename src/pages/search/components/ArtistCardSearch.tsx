import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArtistByS } from "@/interfaces/search/Search";
import { Play } from "lucide-react";
import React from "react";

interface CardInfo {
  artist: ArtistByS;
}

const ArtistCardSearch: React.FC<CardInfo> = ({ artist }) => {
  if (!artist) {
    return <></>;
  }
  return (
    <section className="mb-12">
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
                src={artist.picture_medium}
                alt={artist.name}
                height={200}
                width={200}
                className="rounded-[8px] shadow-lg"
              />

              <h3 className="text-3xl font-bold mb-2">{artist.name}</h3>
              <p className="text-lg">
                Tu mezcla personal de favoritos y nuevos descubrimientos
              </p>
            </div>
          </div>
          <Button className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
            <Play className="h-6 w-6" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default ArtistCardSearch;
