import * as deemix from "deemix";
import { deezerInstance, format } from "../deemix";
import { logger } from "../logger";
import { deemixDownloadWrapper } from "../download";

export const trackToDownload = async (id: string|number) => {
  let dlObj: deemix.types.downloadObjects.IDownloadObject;

  try {
    dlObj = await deemix.generateDownloadObject(
      deezerInstance,
      `https://www.deezer.com/track/${id}`,
      format
    );

    // TODO: Borrar despues esto solo es un test
    console.log(`Intancia: ${deezerInstance}`);
    console.log(`Track_Url: https://www.deezer.com/track/${id}`);
    console.log(`Fromato: ${format}`);
  } catch (err) {
    logger.error((err as Error).toString());
    console.log("Track no encontrado... :(");
    return "Track no encontrado... :(";
  }

  let isDone = false;

  let trackInfoAux = await deezerInstance.api.get_track(parseInt(id.toString()));

  let track:any;
  try {
    track = id || (await deezerInstance.api.get_track(id));
    
    if (!id) id = track;
  } catch (err) {
    logger.error((err as Error).toString());
    return `Track with ${id} not found`
  }

    // @ts-expect-error
    await deemixDownloadWrapper(dlObj, trackInfoAux.id, {id: track.id, title: track.title, artist: 
      trackInfoAux.artist.name});
    isDone = true;
    logger.debug(`Descarga terminada: ${id}`);
  
};
