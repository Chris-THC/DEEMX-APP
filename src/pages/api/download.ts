import { deezerInstance } from "@/deemix/deemix";
import { trackToDownload } from "@/deemix/donwloader/track";
import { Server as HTTPServer } from "http";
import { Socket } from "net";
import { NextApiRequest, NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

type NextApiResponseSocketIO = NextApiResponse & {
  socket: Socket & {
    server: HTTPServer & {
      io: SocketIOServer;
    };
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseSocketIO
) {
  if (!res.socket.server.io) {
    console.log("Iniciando servidor Socket.IO");
    const io = new SocketIOServer(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Cliente conectado");
    });
  }

  try {
    const arl: string =
      "39c22228247484dba77416ea60f1ea983283a08e7bda4f2f1a0ab7ff548b154dd5b61e159e520db97b47902cc5d6eaa9361d6ff8161c1c5f0ae6f12593c6b35793182a73a1657eb51e82aac0f65b2b2e80c438516b0214867b764be751d5ed93";

    const trackIdNew = "2638761212";

    // Iniciar sesión en Deezer
    await deezerInstance.login_via_arl(arl);

    // Llamar a la función de descarga y emitir progreso
    await trackToDownload(trackIdNew, (progress: number) => {
      res.socket.server.io.emit("download-progress", { progress });
    });

    return res.status(200).json({ message: "Descarga completada" });
  } catch (error) {
    console.error("Error en la descarga:", error);
    return res.status(500).json({ error: "Error en la descarga" });
  }
}
