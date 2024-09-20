import * as deemix from "deemix";
import { deemixSettings, deezerInstance } from "./deemix";

export interface Metadata {
  id: number;
  title: string;
  artist: string;
}

export async function deemixDownloadWrapper(
  dlObj: deemix.types.downloadObjects.IDownloadObject,
  coverArt: string,
  metadata: Metadata,
  onProgress: (progress: number) => void // Callback para enviar progreso
) {
  let trackpaths: string[] = [];

  const listener = {
    send(key: any, data: any) {
      if (data.downloaded) {
        trackpaths.push(data.downloadPath);
      }

      if (
        data.state !== "tagging" &&
        data.state !== "getAlbumArt" &&
        data.state !== "getTags" &&
        !dlObj.isCanceled
      ) {
        console.log(JSON.stringify({ data: data.progress }));
        onProgress(data.progress); // Llama a la función de callback con el progreso
      }
    },
  };

  listener.send("coverArt", coverArt);
  listener.send("metadata", metadata);

  let deemixDownloader = new deemix.downloader.Downloader(
    deezerInstance,
    dlObj,
    deemixSettings,
    listener
  );

  try {
    await deemixDownloader.start();
  } catch (err) {
    console.error((err as Error).toString());
  }

  if (dlObj.isCanceled) {
    console.info("download gracefully cancelled, cleaning up");

    trackpaths.forEach((q) => {
      console.info(`removing ${q}`);
    });
  } else if (trackpaths.length === 1) {
    console.info(
      JSON.stringify({
        key: "download",
        data: trackpaths[0].replace(process.cwd(), ""),
      })
    );
  }
}
