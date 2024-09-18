import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Genre } from "@/interfaces/musicGenres/MusicGenre";
import Autoplay from "embla-carousel-autoplay";
import { PlayCircle } from "lucide-react";
import React from "react";

interface DataRealse {
  genre: Genre[];
}

const Releases: React.FC<DataRealse> = ({ genre }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 1200, stopOnInteraction: true })
  );

  return (
    <section className="pb-8 mx-4">
      <h2 className="text-2xl font-semibold mb-4">Escucha algo nuevo</h2>

      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-[96%]"
      >
        <CarouselContent className="pl-4">
          {genre.map((dataGenre, index) => (
            <Card
              key={index}
              className="bg-card min-w-[260px] md:min-w-[250px] rounded-lg overflow-hidden shadow-lg mb-4 mx-3 bg-gradient-to-b from-blue-400 to-blue-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dataGenre.picture_big}
                  alt={dataGenre.id}
                  className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardFooter>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 mt-4 transition-colors duration-300">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  {`Escuchar ${dataGenre.name}`}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Releases;
