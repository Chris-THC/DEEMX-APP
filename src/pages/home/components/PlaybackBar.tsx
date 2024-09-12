import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

const PlaybackBar = () => {
  return (
    <div className="bg-card border-t h-20 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="/placeholder.svg?height=50&width=50&text=Album"
          alt="Current album"
          className="w-12 h-12 rounded mr-4"
        />
        <div>
          <h4 className="font-semibold">Nombre de la canción</h4>
          <p className="text-sm text-muted-foreground">Artista</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Shuffle className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button variant="default" size="icon" className="rounded-full">
          <Play className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <SkipForward className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Repeat className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Volume2 className="h-4 w-4" />
        <Input type="range" className="w-24" />
      </div>
    </div>
  );
};

export default PlaybackBar;
