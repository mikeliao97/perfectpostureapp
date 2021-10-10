// Main Process
const { app, BrowserWindow, ipcMain, Notification, Tray, Menu } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;
const url = require('url')

const trayIcon = path.join(__dirname, 'assets', 'images', 'react_icon.png')

let win = null;
function createWindow() {
  // Browser Window <- Renderer Process
  win = new BrowserWindow({
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

  let to = url.format({
    pathname: path.join(__dirname, 'index.html'),
    hash: '/explore',
    protocol: 'file:',
    slashes: true,
  })
  win.loadURL(to);


  isDev && win.webContents.openDevTools();
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

let tray = null;
app.whenReady().then(() => {
  const menu = Menu.buildFromTemplate(getTrayMenu());
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

function startBreak() {
  win.destroy();
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
  let to = url.format({
    pathname: path.join(__dirname, 'index.html'),
    hash: '/break',
    protocol: 'file:',
    slashes: true
  })
  win.loadURL(to);
}

function Home() {
  win.destroy();
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
  let to = url.format({
    pathname: path.join(__dirname, 'index.html'),
    hash: '/products',
    protocol: 'file:',
    slashes: true
  })
  win.loadURL(to);
}

// Tray menu
function getTrayMenu() {
  const trayMenu = []

  trayMenu.push({
    label: "Start break",
    click: startBreak 
  }, {
    type: 'separator'
  })

  trayMenu.push({
    label: "Home",
    click: Home
  }, {
    type: 'separator'
  })

  return trayMenu
}