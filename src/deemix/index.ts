import { theARL } from "@/enums/enum";
import { deezerInstance } from "./deemix";
import { logger } from "./logger";

export let searchcache: Record<string, DeezerResponse<[Album]>> = {};
export let albumcache: Record<string, Album> = {};
export let trackcache: Record<string, Track> = {};

// deezerInstance.login_via_arl(theARL).then((a) => {
//   logger.info(`Estas en deezer tu arl es: ${a}`);
//   deezerInstance.api.get_artist_top("1");
// });
