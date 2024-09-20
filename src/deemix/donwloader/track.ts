import * as deemix from "deemix";
import { deezerInstance, format } from "../deemix";
import { deemixDownloadWrapper } from "../download";

export const trackToDownload = async (
  id: string | number,
  onProgress: (progress: number) => void
) => {
  let dlObj: deemix.types.downloadObjects.IDownloadObject;

  try {
    dlObj = await deemix.generateDownloadObject(
      deezerInstance,
      `https://www.deezer.com/track/${id}`,
      format
    );
  } catch (err) {
    console.log("Track no encontrado... :(");
    return "Track no encontrado... :(";
  }

  let trackInfoAux = await deezerInstance.api.get_track(
    parseInt(id.toString())
  );

  let track: any;
  try {
    track = id || (await deezerInstance.api.get_track(id));

    if (!id) id = track;
  } catch (err) {
    return `Track with ${id} not found`;
  }

  // Llamar al wrapper y pasar el callback de progreso
  await deemixDownloadWrapper(
    dlObj,
    trackInfoAux.id.toString(),
    {
      id: track.id,
      title: track.title,
      artist: trackInfoAux.artist.name,
    },
    onProgress
  );
};
