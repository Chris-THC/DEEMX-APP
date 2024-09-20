// components/DownloadButton.tsx
import axios from "axios";
import { useState } from "react";

const DownloadButton = () => {
  const [trackId, setTrackId] = useState("2638761212"); // ID por defecto
  const [isLoading, setIsLoading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState("");

  const handleDownload = async () => {
    setIsLoading(true);
    setDownloadStatus("");

    const arl = localStorage.getItem("arlToken");

    try {
      const response = await axios.post("/api/download", {
        arl,
        trackId,
      });

      if (response.status === 200) {
        setDownloadStatus("Descarga completada");
        console.log("Track Info:", response.data.trackInfo);
      } else {
        setDownloadStatus("Error en la descarga");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setDownloadStatus("Error al realizar la solicitud");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa el trackId"
        value={trackId}
        onChange={(e) => setTrackId(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <button onClick={handleDownload} disabled={isLoading}>
        {isLoading ? "Descargando..." : "Descargar"}
      </button>
      {downloadStatus && <p>{downloadStatus}</p>}
    </div>
  );
};

export default DownloadButton;
