import deemix from 'deemix';
import deezer from 'deezer-js';

export const deezerInstance = new deezer.Deezer();

export const format = deezer.TrackFormats['FLAC'];

export const deemixSettings = deemix.settings.DEFAULTS;
deemixSettings.downloadLocation = "C:\\Users\\Cris\\Desktop\\DEEMX-PROJECT\\musicTest";
// deemixSettings.downloadLocation = "../music";
// deemixSettings.downloadLocation = path.join(process.cwd(), './music');
deemixSettings.overwriteFile = deemix.settings.OverwriteOption.ONLY_TAGS;
deemixSettings.maxBitrate = String(format);
deemixSettings.syncedLyrics=true
deemixSettings.embeddedArtworkPNG=true
deemixSettings.embeddedArtworkSize=1000
deemixSettings.tracknameTemplate =  deemixSettings.tracknameTemplate;
deemixSettings.albumTracknameTemplate = deemixSettings.albumTracknameTemplate;
// deemixSettings.albumNameTemplate =config.deemix.albumNameTemplate || deemixSettings.createM3U8File;
deemixSettings.albumNameTemplate = deemixSettings.toString();
deemixSettings.createM3U8File = deemixSettings.createM3U8File;
deemixSettings.embeddedArtworkPNG = deemixSettings.embeddedArtworkPNG;
deemixSettings.embeddedArtworkSize =  deemixSettings.embeddedArtworkSize;
deemixSettings.saveArtwork =  deemixSettings.saveArtwork;
deemixSettings.localArtworkSize = deemixSettings.localArtworkSize || deemixSettings.localArtworkSize;
deemixSettings.localArtworkFormat = deemixSettings.localArtworkFormat || deemixSettings.localArtworkFormat;
deemixSettings.jpegImageQuality = deemixSettings.jpegImageQuality || deemixSettings.jpegImageQuality;
deemixSettings.removeDuplicateArtists =deemixSettings.removeDuplicateArtists;