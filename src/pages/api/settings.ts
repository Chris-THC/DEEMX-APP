import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const SETTINGS_FILE_PATH = path.join(process.cwd(), "data", "deemx.json");

// Helper function to read the settings file
const readSettings = () => {
  try {
    const data = fs.readFileSync(SETTINGS_FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading settings file:", error);
    return {}; // Return empty object if file not found
  }
};

// Helper function to save the settings file
const saveSettings = (settings: any) => {
  try {
    const dir = path.dirname(SETTINGS_FILE_PATH);

    // Verifica si el directorio existe, si no, lo crea
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Escribe el archivo de configuración
    fs.writeFileSync(SETTINGS_FILE_PATH, JSON.stringify(settings, null, 2));
    console.log("Configuraciones guardadas correctamente.");
  } catch (error) {
    console.error("Error guardando el archivo de configuraciones:", error);
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { arl, downloadLocation, maxBitrate, coverSize, syncLyrics } =
      req.body;
    const currentSettings = readSettings();

    // Update settings
    const updatedSettings = {
      ...currentSettings,
      arl: arl || currentSettings.arl,
      downloadLocation: downloadLocation || currentSettings.downloadLocation,
      maxBitrate: maxBitrate || currentSettings.maxBitrate,
      coverSize: coverSize || currentSettings.coverSize,
      syncLyrics: syncLyrics || currentSettings.syncLyrics,
    };

    saveSettings(updatedSettings);
    return res.status(200).json(updatedSettings);
  }

  // Handle GET request
  if (req.method === "GET") {
    const currentSettings = readSettings();
    return res.status(200).json(currentSettings);
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
