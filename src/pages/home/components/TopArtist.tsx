import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TopArtists } from "@/interfaces/topArtists/TopArtist";
import Autoplay from "embla-carousel-autoplay";
import { PlayCircle } from "lucide-react";
import React from "react";

interface PropsCard {
  artist: TopArtists;
}
interface ArrayProp {
  artistList: TopArtists[];
}

const CardArtist: React.FC<PropsCard> = ({ artist }) => {
  return (
    <Card className="w-[320px] bg-gradient-to-b from-blue-400 to-blue-600 text-white min-w-[240px] md:min-w-[250px] rounded-lg overflow-hidden shadow-lg mx-3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardHeader className="relative h-44 overflow-hidden">
        <img
          src={artist.picture_xl}
          alt={artist.name}
          className="absolute inset-0 h-full w-full object-cover rounded-t-lg transform transition-transform duration-500 hover:scale-110"
        />
      </CardHeader>
      <CardContent className="pt-4 h-12">
        <CardTitle className="text-lg font-bold text-center">{artist.name}</CardTitle>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300">
          <PlayCircle className="mr-2 h-4 w-4" /> Escuchar Ahora
        </Button>
      </CardFooter>
    </Card>
  );
};


const TopArtist: React.FC<ArrayProp> = ({ artistList }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="pb-8 mx-4">
      <h2 className="text-2xl font-semibold mb-4">Top artistas</h2>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-[96%]"
      >
        <CarouselContent className="pl-4">
          {artistList.map((dataArtist, idx) => (
            <CardArtist key={idx} artist={dataArtist} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default TopArtist;
