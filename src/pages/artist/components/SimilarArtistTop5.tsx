import { Button } from "@/components/ui/button";
import { Related } from "@/interfaces/artist/Artist";
import { storeArtistInfo } from "@/store/artist/ArtistStore";
import { useRouter } from "next/router";
import React from "react";

interface SimilarProps {
  artistsList: Related;
}

const SimilarArtistTop5: React.FC<SimilarProps> = ({ artistsList }) => {
  const { setIdArtist } = storeArtistInfo();
  const router = useRouter();

  const handleNavigationArtist = (route: string, idArtist: string | number) => {
    setIdArtist(idArtist);
    router.push(route);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-background">
      <h2 className="text-2xl font-semibold mb-4">Artistas Similares</h2>
      <ul className="space-y-4">
        {artistsList.data.slice(0, 5).map((artist, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={artist.picture_medium}
                alt={artist.name}
                width={60}
                height={60}
                className="rounded-full cursor-pointer"
                onClick={() => handleNavigationArtist("/artist", artist.id)}
              />
              <div>
                <p
                  className="font-semibold cursor-pointer"
                  onClick={() => handleNavigationArtist("/artist", artist.id)}
                >
                  {artist.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {artist.nb_fan} fans
                </p>
              </div>
            </div>
            {/* <Heart
              className={`w-6 h-6 ${
                artist.liked
                  ? "fill-purple-500 text-purple-500"
                  : "text-muted-foreground"
              }`}
            /> */}
          </li>
        ))}
      </ul>
      <Button variant="outline" className="w-full mt-4">
        See more artists
      </Button>
    </div>
  );
};

export default SimilarArtistTop5;
