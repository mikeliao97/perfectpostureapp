// Main Process
const { app, BrowserWindow, ipcMain, Notification, Tray, Menu } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

const trayIcon = path.join(__dirname, 'assets', 'images', 'react_icon.png')

function createWindow() {
  // Browser Window <- Renderer Process
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
  isDev && win.webContents.openDevTools();
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

let tray = null;
app.whenReady().then(() => {
  const template = require('./utils/Menu').createTemplate(app)
  const menu = Menu.buildFromTemplate(template);
  tray = new Tray(trayIcon)
  tray.setContextMenu(menu)
  createWindow();
})


ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notification', body: message}).show();
})

ipcMain.on('app-quit', () => {
  app.quit();
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})


// Chromium -> web eingine for rendering the UI, full Chrome-like web browser
// V8 -> engine that provides capabilities to execute, run, JS code in the browser
// Node JS(V8) -> we are able to run JS code + provides more features

// Webpack -> is a module builder, main purpose is to bundle JS files for usage in the browsert
// Babel -> js a JS compiler
