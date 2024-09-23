import { getSettingsByDeemx } from '@/other/accesToSettings/AccesSettings';
import deemix from 'deemix';
import deezer from 'deezer-js';

export const deezerInstance = new deezer.Deezer();

const settingsDeemx = getSettingsByDeemx();

export const format = deezer.TrackFormats[settingsDeemx.maxBitrate];

export const deemixSettings = deemix.settings.DEFAULTS;
deemixSettings.downloadLocation = settingsDeemx.downloadLocation;
deemixSettings.overwriteFile = deemix.settings.OverwriteOption.ONLY_TAGS;
deemixSettings.maxBitrate = String(format);
deemixSettings.syncedLyrics = settingsDeemx.syncLyrics==="yes"?true:false;
deemixSettings.embeddedArtworkPNG=true
deemixSettings.embeddedArtworkSize=parseInt(settingsDeemx.coverSize)
deemixSettings.tracknameTemplate =  deemixSettings.tracknameTemplate;
deemixSettings.albumTracknameTemplate = deemixSettings.albumTracknameTemplate;
deemixSettings.albumNameTemplate = deemixSettings.toString();
deemixSettings.createM3U8File = deemixSettings.createM3U8File;
deemixSettings.embeddedArtworkPNG = deemixSettings.embeddedArtworkPNG;
deemixSettings.embeddedArtworkSize =  deemixSettings.embeddedArtworkSize;
deemixSettings.saveArtwork =  deemixSettings.saveArtwork;
deemixSettings.localArtworkSize = deemixSettings.localArtworkSize || deemixSettings.localArtworkSize;
deemixSettings.localArtworkFormat = deemixSettings.localArtworkFormat || deemixSettings.localArtworkFormat;
deemixSettings.jpegImageQuality = deemixSettings.jpegImageQuality || deemixSettings.jpegImageQuality;
deemixSettings.removeDuplicateArtists =deemixSettings.removeDuplicateArtists;