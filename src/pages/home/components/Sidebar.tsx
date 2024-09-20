import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Heart,
  Home,
  Library,
  PlusCircle,
  Search,
  Settings,
  User,
} from "lucide-react";
import { useRouter } from "next/router";

const SidebarApp = () => {
  const playlists = [
    "Mi lista de reproducción",
    // "Favoritos",
    // "Descubrimiento semanal",
    // "Top 50 Global",
  ];

  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <aside className="w-52 bg-card p-4 hidden md:block">
      <nav className="space-y-4">
        <Button
          onClick={() => handleNavigation("/")}
          variant="ghost"
          className="w-full justify-start"
        >
          <Home className="mr-2 h-4 w-4" />
          Inicio
        </Button>
        <Button
          onClick={() => handleNavigation("/search")}
          variant="ghost"
          className="w-full justify-start"
        >
          <Search className="mr-2 h-4 w-4" />
          Buscar
        </Button>
        <Button
          onClick={() => handleNavigation("/artist")}
          variant="ghost"
          className="w-full justify-start"
        >
          <User className="mr-2 h-4 w-4" />
          Artista
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Library className="mr-2 h-4 w-4" />
          Tu biblioteca
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => handleNavigation("/settings")}
        >
          <Settings className="mr-2 h-4 w-4" />
          Ajustes
        </Button>
      </nav>
      <div className="mt-8">
        <Button variant="outline" className="w-full justify-start">
          <PlusCircle className="mr-2 h-4 w-4" />
          Crear playlist
        </Button>
        <Button variant="ghost" className="w-full justify-start mt-2">
          <Heart className="mr-2 h-4 w-4" />
          Tus me gusta
        </Button>
      </div>
      <ScrollArea className="h-[300px] mt-4">
        <div className="space-y-2">
          {playlists.map((playlist, i) => (
            <Button key={i} variant="ghost" className="w-full justify-start">
              {playlist}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};

export default SidebarApp;
