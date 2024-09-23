import { deezerInstance } from "@/deemix/deemix";
import { trackToDownload } from "@/deemix/donwloader/track";
import { getSettingsByDeemx } from "@/other/accesToSettings/AccesSettings";
import { Server as HTTPServer } from "http";
import { Socket } from "net";
import { NextApiRequest, NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

const settingsDeemx = getSettingsByDeemx();

type NextApiResponseSocketIO = NextApiResponse & {
  socket: Socket & {
    server: HTTPServer & {
      io: SocketIOServer;
    };
  };
};

const Downloader = async (
  req: NextApiRequest,
  res: NextApiResponseSocketIO
) => {
  if (!res.socket.server.io) {
    console.log("Iniciando servidor Socket.IO");
    const io = new SocketIOServer(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Cliente conectado");
    });
  }

  try {
    const { idTrack } = req.body;
    const arl: string = settingsDeemx.arl;

    // Iniciar sesión en Deezer
    await deezerInstance.login_via_arl(arl);

    // Llamar a la función de descarga y emitir progreso
    await trackToDownload(idTrack as string, (progress: number) => {
      res.socket.server.io.emit("download-progress", { progress });
    });

    // Emitir evento de éxito cuando la descarga se complete
    res.socket.server.io.emit("download-success", { success: true });

    return res.status(200).json({ message: "Descarga completada" });
  } catch (error) {
    console.error("Error en la descarga:", error);

    // Emitir evento de error si la descarga falla
    res.socket.server.io.emit("download-failure", { success: false });

    return res.status(500).json({ error: "Error en la descarga" });
  }
};

export default Downloader;
