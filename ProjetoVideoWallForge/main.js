const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
let mainWindow;

function createMenuWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('menu.html');
}

function openSetupWindow() {
  const setupWindow = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  setupWindow.loadFile('setup.html');
}

function openGridWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

ipcMain.on('open-setup', () => {
  openSetupWindow();
});

ipcMain.on('open-grid', () => {
  openGridWindow();
});

app.whenReady().then(() => {
  createMenuWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
