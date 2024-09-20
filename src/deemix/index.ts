import { deezerInstance } from "./deemix";
import { trackToDownload } from "./donwloader/track";
import { logger } from "./logger";

export let searchcache: Record<string, DeezerResponse<[Album]>> = {};
export let albumcache: Record<string, Album> = {};
export let trackcache: Record<string, Track> = {};
const arl: string = localStorage.getItem("arlToken")!;

const trackId = "2638761212";

deezerInstance.login_via_arl(arl).then((a) => {
  logger.info(`Estas en deezer tu arl es: ${a}`);
  trackToDownload(trackId);
});
