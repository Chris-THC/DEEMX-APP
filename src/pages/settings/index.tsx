import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [arl, setArl] = useState<string>("");
  const [downloadLocation, setDownloadLocation] = useState<string>();
  const [maxBitrate, setMaxBitrate] = useState<string>("");
  const [coverSize, setCoverSize] = useState<string>("");
  const [syncLyrics, setSyncLyrics] = useState<string>("");

  const fetchSettings = async () => {
    try {
      const response = await axios.get("/api/settings");
      const data = response.data;
      setArl(data.arl || "");
      setDownloadLocation(data.downloadLocation || "");
      setMaxBitrate(data.maxBitrate || "");
      setCoverSize(data.coverSize || "");
      setSyncLyrics(data.syncLyrics || "");
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  // Fetch current settings on page load
  useEffect(() => {
    fetchSettings();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        arl,
        downloadLocation,
        maxBitrate,
        coverSize,
        syncLyrics,
      }),
    });

    if (response.ok) {
      alert("Settings updated successfully!");
    } else {
      alert("Failed to update settings");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[80%] mx-auto my-5 p-6 rounded-lg shadow-lg space-y-6 bg-[#f4f4f5]"
    >
      <div className="flex flex-col space-y-2">
        <Label className="text-sm font-semibold text-gray-700">ARL</Label>
        <input
          type="text"
          value={arl}
          onChange={(e) => setArl(e.target.value)}
          className="w-full p-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Agrear ARL"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <Label className="text-sm font-semibold text-gray-700">
          Ruta de descarga
        </Label>
        <input
          type="text"
          value={downloadLocation}
          onChange={(e) => setDownloadLocation(e.target.value)}
          className="w-full p-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ej: C:\Descargas\Musica"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <Label htmlFor="calidadAudio">Calidad del Audio</Label>
        <Select
          name="calidadAudio"
          value={maxBitrate}
          onValueChange={setMaxBitrate}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecciona la calidad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="MP3_128">128 kbps</SelectItem>
            <SelectItem value="MP3_320">320 kbps</SelectItem>
            <SelectItem value="FLAC">FLAC</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="tamanoCaratula">Tamaño de la Carátula</Label>
        <Select
          name="tamanoCaratula"
          value={coverSize}
          onValueChange={setCoverSize}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecciona el tamaño" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="500">500x500</SelectItem>
            <SelectItem value="1000">1000x1000</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="syncLetras">Agregar letras sincronizadas</Label>
        <Select
          name="syncLetras"
          value={syncLyrics}
          onValueChange={setSyncLyrics}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecciona una opción" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Sí</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Save Settings
      </Button>
    </form>
  );
}
