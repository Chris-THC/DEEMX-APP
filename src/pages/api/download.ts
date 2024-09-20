// pages/api/download.ts
import { deezerInstance } from "@/deemix/deemix";
import { trackToDownload } from "@/deemix/donwloader/track";
import { NextApiRequest, NextApiResponse } from "next";

export let searchcache: Record<string, DeezerResponse<[Album]>> = {};
export let albumcache: Record<string, Album> = {};
export let trackcache: Record<string, Track> = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const arl: string =
      "39c22228247484dba77416ea60f1ea983283a08e7bda4f2f1a0ab7ff548b154dd5b61e159e520db97b47902cc5d6eaa9361d6ff8161c1c5f0ae6f12593c6b35793182a73a1657eb51e82aac0f65b2b2e80c438516b0214867b764be751d5ed93";

    const trackIdNew = "2638761212";

    // Iniciar sesión en Deezer
    const a = await deezerInstance.login_via_arl(arl);
    console.info(`Estas en deezer tu arl es: ${a}`);

    // Descargar la pista
    await trackToDownload(trackIdNew);

    return res.status(200).json({ message: "Descarga completada" });
  } catch (error) {
    console.error("Error en la descarga:", error);
    return res.status(500).json({ error: "Error en la descarga" });
  }
}
