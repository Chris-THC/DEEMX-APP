import React from "react";

interface Artist {
  id: string;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
  type: string;
}
interface TopArtists {
  artistInfo: Artist;
}

const TopArtist: React.FC<TopArtists> = ({ artistInfo }) => {
  if (!artistInfo) {
    return <p>No artist data available</p>; // Manejo de error si artistInfo es indefinido
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Top artistas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg overflow-hidden shadow-lg text-center">
          {artistInfo.picture_big ? (
            <img
              src={artistInfo.picture_big}
              alt={artistInfo.id}
              className="w-full h-40 object-cover mx-auto mt-4"
            />
          ) : (
            <p>No image available</p> // Mensaje alternativo si no hay imagen
          )}
          <div className="p-4">
            <h3 className="font-semibold">{artistInfo.name}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopArtist;
