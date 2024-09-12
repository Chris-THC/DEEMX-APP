const TopAlbums = () => {
  const topAlbums = [
    { title: "Álbum Top 1", artist: "Artista X" },
    { title: "Álbum Top 2", artist: "Artista Y" },
    { title: "Álbum Top 3", artist: "Artista Z" },
    { title: "Álbum Top 4", artist: "Artista W" },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Top álbumes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topAlbums.map((album, i) => (
          <div key={i} className="bg-card rounded-lg overflow-hidden shadow-lg">
            <img
              src={`/placeholder.svg?height=150&width=150&text=${album.title}`}
              alt={album.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{album.title}</h3>
              <p className="text-sm text-muted-foreground">{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopAlbums;
