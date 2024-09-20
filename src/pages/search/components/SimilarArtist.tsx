import { Button } from "@/components/ui/button";
import { Related } from "@/interfaces/artist/Artist";
import { ArtistByS } from "@/interfaces/search/Search";
import React from "react";

interface SimilarProps {
  artistsList: ArtistByS[];
}

const SimilarArtistCard: React.FC<SimilarProps> = ({ artistsList }) => {
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-background">
      <h2 className="text-2xl font-semibold mb-4">Artistas Similares</h2>
      <ul className="space-y-4">
        {artistsList.slice(0, 5).map((artist, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={artist.picture_medium}
                alt={artist.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">{artist.name}</p>
                <p className="text-sm text-muted-foreground">
                  {artist.nb_fan} fans
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Button variant="outline" className="w-full mt-4">
        See more artists
      </Button>
    </div>
  );
};

export default SimilarArtistCard;
