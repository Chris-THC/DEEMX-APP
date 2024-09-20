import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useArtist } from "@/hooks/artist/Artist";
import { storeArtistInfo } from "@/store/artist/ArtistStore";
import { HeartIcon, PlayIcon, ShareIcon } from "lucide-react";
import { useState } from "react";
import SimilarArtistTop5 from "./components/SimilarArtistTop5";
import Top10TracksByArtist from "./components/Top10";
import AlbumsByArtist from "./components/AlbumsByArtist";
import PlaylistByArtist from "./components/PlayListByArtist";

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

  if (isLoading) {
    return (
      <div className="flex justify-center align-middle h-full ">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-gray-800 m-4">
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

        <div className="mt-8">
          <div className="grid grid-cols-3 gap-5">
            <Card className="col-span-2">
              <Top10TracksByArtist trackList={artistInf?.top10!} />
            </Card>
            <Card>
              <SimilarArtistTop5 artistsList={artistInf?.related!} />
            </Card>
          </div>
          <div>
            <AlbumsByArtist albumList={artistInf?.albums!}/>
          </div>
          <div>
            <PlaylistByArtist playListArr={artistInf?.playlist!}/>
          </div>
        </div>
      </div>
    </div>
  );
}
