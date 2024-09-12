import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Genre } from "@/interfaces/musicGenres/MusicGenre";
import Autoplay from "embla-carousel-autoplay";
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
      <h2 className="text-2xl font-semibold mb-4">Hey! escucha algo nuevo</h2>

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
              className="bg-card min-w-[240px] md:min-w-[250px] rounded-lg overflow-hidden shadow-lg mb-4 mx-3"
            >
              <img
                src={dataGenre.picture_big}
                alt={dataGenre.id}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-center">{dataGenre.name}</h3>
              </div>
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
