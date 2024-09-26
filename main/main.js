const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: 760,
    width: 1400,
    minWidth: 1400, // Establece el ancho mínimo
    minHeight: 760, // Establece la altura mínima
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      // webSecurity: true, // Consider enabling for production
    },
  });

  // Quita el menú por defecto
  Menu.setApplicationMenu(null);

  mainWindow.loadURL("http://localhost:3000");
};

app.on("ready", async () => {
  try {
    await require("../server"); // Use async/await for asynchronous operations
    createWindow();
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
