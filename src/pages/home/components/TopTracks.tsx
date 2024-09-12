import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import React from "react";

const TopTracks = () => {
  const topSongs = [
    "Canción 1 - Artista A",
    "Canción 2 - Artista B",
    "Canción 3 - Artista C",
    "Canción 4 - Artista D",
    "Canción 5 - Artista E",
    "Canción 6 - Artista F",
    "Canción 7 - Artista G",
    "Canción 8 - Artista H",
    "Canción 9 - Artista I",
    "Canción 10 - Artista J",
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Top 10 canciones</h2>
      <div className="bg-card rounded-lg p-4">
        {topSongs.map((song, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2 border-b last:border-b-0"
          >
            <span className="font-medium">
              {i + 1}. {song}
            </span>
            <Button variant="ghost" size="sm">
              <Play className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTracks;
