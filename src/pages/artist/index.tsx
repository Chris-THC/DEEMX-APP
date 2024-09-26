import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useArtist } from "@/hooks/artist/Artist";
import IsLoadingComponent from "@/other/isLoading/IsloadingComponent";
import { storeArtistInfo } from "@/store/artist/ArtistStore";
import { HeartIcon, PlayIcon, ShareIcon } from "lucide-react";
import AlbumsByArtist from "./components/AlbumsByArtist";
import PlaylistByArtist from "./components/PlayListByArtist";
import SimilarArtistTop5 from "./components/SimilarArtistTop5";
import Top10TracksByArtist from "./components/Top10";

export default function ArtistPage() {
  const { idArtist } = storeArtistInfo();

  const { data: artistInf, isLoading } = useArtist(idArtist);

  if (isLoading) {
    return <IsLoadingComponent />;
  }

  if (!artistInf) return <></>;

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
            <Card className="col-span-2 row-span-3">
              <Top10TracksByArtist trackList={artistInf?.top10!} />
            </Card>
            <Card>
              <SimilarArtistTop5 artistsList={artistInf?.related!} />
            </Card>
          </div>
          <div>
            <AlbumsByArtist albumList={artistInf?.albums!} />
          </div>
          <div>
            <PlaylistByArtist playListArr={artistInf?.playlist!} />
          </div>
        </div>
      </div>
    </div>
  );
}
