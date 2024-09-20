import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const SettingsScreen = () => {
  const [arlCodigo, setArlCodigo] = useState<string>("");
  const [rutaDescarga, setRutaDescarga] = useState<string>("");

  // Cargar configuraciones desde el localStorage cuando el componente se monta
  useEffect(() => {
    const savedArlCodigo = localStorage.getItem("arlCodigo");
    const savedRutaDescarga = localStorage.getItem("rutaDescarga");

    if (savedArlCodigo) setArlCodigo(savedArlCodigo);
    if (savedRutaDescarga) setRutaDescarga(savedRutaDescarga);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Guardar las configuraciones en el localStorage
    localStorage.setItem("arlToken", arlCodigo);
    localStorage.setItem("downloadPath", rutaDescarga);

    console.log("Configuraciones guardadas:", { arlCodigo, rutaDescarga });
    
    toast({
      title: "Configuraciones guardadas",
      description:
        "Tus configuraciones de ARL han sido actualizadas exitosamente.",
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Configuración ARL</CardTitle>
        <CardDescription>
          Configura el código ARL y la ruta de descarga
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="arlCodigo">Código ARL</Label>
              <Input
                id="arlCodigo"
                placeholder="Ingrese el código ARL"
                value={arlCodigo}
                onChange={(e) => setArlCodigo(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="rutaDescarga">Ruta de Descarga</Label>
              <Input
                id="rutaDescarga"
                placeholder="Ingrese la ruta de descarga"
                value={rutaDescarga}
                onChange={(e) => setRutaDescarga(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit" onClick={handleSubmit}>
          Guardar Configuraciones
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SettingsScreen;
