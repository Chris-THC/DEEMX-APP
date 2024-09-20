import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Disc, Play, Search } from "lucide-react";
import { useState } from "react";

// Datos de ejemplo
const sampleData = {
  flowPlaylist: {
    id: 1,
    name: "Flow",
    image: "/placeholder.svg?height=300&width=300",
  },
  popularSongs: [
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      image: "/placeholder.svg?height=56&width=56",
    },
    {
      id: 2,
      name: "Dance Monkey",
      artist: "Tones and I",
      image: "/placeholder.svg?height=56&width=56",
    },
    {
      id: 3,
      name: "Watermelon Sugar",
      artist: "Harry Styles",
      image: "/placeholder.svg?height=56&width=56",
    },
    {
      id: 4,
      name: "Don't Start Now",
      artist: "Dua Lipa",
      image: "/placeholder.svg?height=56&width=56",
    },
  ],
  topPlaylists: [
    {
      id: 1,
      name: "Top 100 Global",
      image: "/placeholder.svg?height=180&width=180",
      songs: 100,
    },
    {
      id: 2,
      name: "Hits of the Moment",
      image: "/placeholder.svg?height=180&width=180",
      songs: 50,
    },
    {
      id: 3,
      name: "Chill Vibes",
      image: "/placeholder.svg?height=180&width=180",
      songs: 40,
    },
    {
      id: 4,
      name: "Workout Motivation",
      image: "/placeholder.svg?height=180&width=180",
      songs: 60,
    },
  ],
  popularArtists: [
    {
      id: 1,
      name: "Ed Sheeran",
      image: "/placeholder.svg?height=180&width=180",
    },
    {
      id: 2,
      name: "Ariana Grande",
      image: "/placeholder.svg?height=180&width=180",
    },
    { id: 3, name: "Drake", image: "/placeholder.svg?height=180&width=180" },
    {
      id: 4,
      name: "Billie Eilish",
      image: "/placeholder.svg?height=180&width=180",
    },
  ],
  newReleases: [
    {
      id: 1,
      name: "Future Nostalgia",
      artist: "Dua Lipa",
      image: "/placeholder.svg?height=180&width=180",
    },
    {
      id: 2,
      name: "After Hours",
      artist: "The Weeknd",
      image: "/placeholder.svg?height=180&width=180",
    },
    {
      id: 3,
      name: "Chromatica",
      artist: "Lady Gaga",
      image: "/placeholder.svg?height=180&width=180",
    },
    {
      id: 4,
      name: "Fine Line",
      artist: "Harry Styles",
      image: "/placeholder.svg?height=180&width=180",
    },
  ],
};

const SearchMain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("music");

  const handleSearch = () => {
    console.log("Buscando:", searchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-4 sm:px-1 lg:px-1 py-4">
        <div className="flex items-center w-3/4">
              <Input
                type="text"
                placeholder="Buscar canciones, artistas, álbumes, playlists"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow bg-gray-100 border-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                onClick={handleSearch}
                className="ml-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tu Flow</h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0 relative">
              <img
                src={sampleData.flowPlaylist.image}
                alt="Flow"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">Flow</h3>
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

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <TabsList className="bg-transparent border-b border-gray-200">
            <TabsTrigger
              value="music"
              className="text-lg font-semibold px-4 py-2 text-gray-600 hover:text-blue-600 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
            >
              Música
            </TabsTrigger>
            <TabsTrigger
              value="podcasts"
              className="text-lg font-semibold px-4 py-2 text-gray-600 hover:text-blue-600 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
            >
              Podcasts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="music">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Canciones Populares</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {sampleData.popularSongs.map((song) => (
                  <Card
                    key={song.id}
                    className="flex items-center p-2 hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={song.image}
                      alt={song.name}
                      className="w-14 h-14 rounded mr-4"
                    />
                    <div className="flex-grow">
                      <h3 className="font-medium">{song.name}</h3>
                      <p className="text-sm text-gray-500">{song.artist}</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-gray-400 hover:text-blue-600"
                    >
                      <Play className="h-5 w-5" />
                    </Button>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Top Playlists</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {sampleData.topPlaylists.map((playlist) => (
                  <Card key={playlist.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <img
                        src={playlist.image}
                        alt={playlist.name}
                        className="w-full aspect-square object-cover mb-4 rounded"
                      />
                      <h3 className="font-medium truncate">{playlist.name}</h3>
                      <p className="text-sm text-gray-500">
                        {playlist.songs} canciones
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Artistas Populares</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {sampleData.popularArtists.map((artist) => (
                  <Card key={artist.id} className="overflow-hidden">
                    <CardContent className="p-4 text-center">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                      />
                      <h3 className="font-medium">{artist.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Nuevos Lanzamientos</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {sampleData.newReleases.map((album) => (
                  <Card key={album.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <img
                        src={album.image}
                        alt={album.name}
                        className="w-full aspect-square object-cover mb-4 rounded"
                      />
                      <h3 className="font-medium truncate">{album.name}</h3>
                      <p className="text-sm text-gray-500">{album.artist}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="podcasts">
            <div className="text-center py-12">
              <Disc className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Sección de Podcasts</h3>
              <p className="text-gray-600">
                Aquí irían los podcasts populares y recomendados.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default SearchMain;
