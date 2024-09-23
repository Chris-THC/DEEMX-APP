import fs from 'fs';
import path from 'path';

// Usamos process.cwd() para asegurarnos de obtener la ruta desde la raíz del proyecto
const SETTINGS_FILE_PATH = path.join(process.cwd(), 'data', 'deemx.json');

export const getSettingsByDeemx = () => {
  try {
    const data = fs.readFileSync(SETTINGS_FILE_PATH, 'utf-8');
    const settings = JSON.parse(data);
    return settings;
  } catch (error) {
    console.error('Error reading settings file:', error);
    return null;
  }
};
