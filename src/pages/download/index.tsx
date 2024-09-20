import axios from "axios";
import { useState, useEffect } from "react";
import io from "socket.io-client"; // Importar cliente de Socket.IO

const DownloadButton = () => {
  const [trackId, setTrackId] = useState("2638761212"); // ID por defecto
  const [isLoading, setIsLoading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState("");
  const [downloadProgress, setDownloadProgress] = useState(0); // Estado para progreso

  useEffect(() => {
    // Conectar a Socket.IO en el frontend
    const socket = io();

    // Escuchar el progreso de la descarga desde el servidor
    socket.on("download-progress", (data) => {
      setDownloadProgress(data.progress);
    });

    // Limpiar la conexión del socket al desmontar el componente
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleDownload = async () => {
    setIsLoading(true);
    setDownloadStatus("");
    setDownloadProgress(0); // Reiniciar el progreso al iniciar una nueva descarga

    const arl = localStorage.getItem("arlToken");

    try {
      const response = await axios.post("/api/download", {
        arl,
        trackId,
      });

      if (response.status === 200) {
        setDownloadStatus("Descarga completada");
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

      {isLoading && <p>Progreso de descarga: {downloadProgress}%</p>}
    </div>
  );
};

export default DownloadButton;
