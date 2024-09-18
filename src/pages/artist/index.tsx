import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useArtist } from "@/hooks/artist/Artist";
import { storeArtistInfo } from "@/store/artist/ArtistStore";
import {
  HeartIcon,
  MoreHorizontalIcon,
  PlayIcon,
  ShareIcon,
} from "lucide-react";
import { useState } from "react";

export default function ArtistPage() {
  const [activeTab, setActiveTab] = useState("discography");
  const { idArtist } = storeArtistInfo();

  const { data: artistInf, isLoading } = useArtist(idArtist);

  const topTracks = [
    {
      title: "Shelter",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    },
    {
      title: "Believe It",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    },
    {
      title: "Finale (feat. Nicholas Petricca)",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    },
    {
      title: "Be Fine",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    },
  ];

  const playlists = [
    {
      title: "100% Madeon",
      tracks: 30,
      fans: 157,
      cover:
        "https://e-cdns-images.dzcdn.net/images/playlist/cfea4f6b56b0b0c45e6c1b9ef54610c4/250x250-000000-80-0-0.jpg",
    },
    {
      title: "Tech House 2024",
      tracks: 127,
      fans: 6524,
      cover:
        "https://e-cdns-images.dzcdn.net/images/playlist/cfea4f6b56b0b0c45e6c1b9ef54610c4/250x250-000000-80-0-0.jpg",
    },
    {
      title: "Workout Mix 2024 - Fitness & Gym Motivation",
      tracks: 94,
      fans: 11698,
      cover:
        "https://e-cdns-images.dzcdn.net/images/playlist/cfea4f6b56b0b0c45e6c1b9ef54610c4/250x250-000000-80-0-0.jpg",
    },
  ];

  console.info(artistInf?.playlist.data[1].title);

  if (isLoading) {
    return (
      <div className="flex justify-center align-middle h-full ">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-gray-800 p-8">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 mb-8">
          <img
            src={artistInf?.artist.picture_xl}
            alt={artistInf?.artist.name}
            className="w-64 h-64 rounded-full shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-2">
              {artistInf?.artist.name}
            </h1>
            <p className="text-gray-600 mb-4">
              {artistInf?.artist.nb_fan.toLocaleString()} fans ·{" "}
              {artistInf?.artist.nb_album} albums
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <PlayIcon className="mr-2 h-4 w-4" /> Play
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <HeartIcon className="mr-2 h-4 w-4" /> Follow
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <ShareIcon className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="discography">Discography</TabsTrigger>
            <TabsTrigger value="top-tracks">Top tracks</TabsTrigger>
            <TabsTrigger value="similar-artists">Similar artists</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="concerts">Concerts</TabsTrigger>
            <TabsTrigger value="bio">Bio</TabsTrigger>
          </TabsList>
          <TabsContent value="discography">Discography content</TabsContent>
          <TabsContent value="top-tracks">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Top tracks</h2>
              <Button variant="outline">View all</Button>
            </div>
            <ul className="space-y-4">
              {topTracks.map((track, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-4 bg-gray-50 p-2 rounded"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 w-6 text-right">
                      {index + 1}
                    </span>
                    <img
                      src={track.cover}
                      alt={track.title}
                      className="w-10 h-10"
                    />
                    <span>{track.title}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <HeartIcon className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontalIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="similar-artists">
            Similar artists content
          </TabsContent>
          <TabsContent value="playlists">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Playlists</h2>
              <Button variant="link" className="text-primary">
                View all
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {playlists.map((playlist, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={playlist.cover}
                      alt={playlist.title}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{playlist.title}</h3>
                      <p className="text-sm text-gray-600">
                        {playlist.tracks} tracks - {playlist.fans} fans
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="concerts">Concerts content</TabsContent>
          <TabsContent value="bio">Bio content</TabsContent>
        </Tabs>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Most popular release</h2>
            <Button variant="link" className="text-primary">
              View all
            </Button>
          </div>
          {/* Add content for most popular release here */}
        </div>
      </div>
    </div>
  );
}
