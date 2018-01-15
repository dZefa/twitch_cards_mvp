const { app, BrowserWindow, ipcMain, net } = require('electron');

let mainWindow, twitchLogin;

app.on('ready', () => {
  const loadurl = `file://${__dirname}/dist/index.html`;
  mainWindow = new BrowserWindow({ width: 1280, height: 720, backgroundColor: 'white', show: false, resizable: false, frame: false });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.loadURL(loadurl);

  mainWindow.webContents.openDevTools();

  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();

    if (url === 'http://localhost:3000/auth/twitch') {
      twitchLogin = new BrowserWindow({ parent: mainWindow, modal: true, width: 360, height: 520, show: false, frame: false, resizable: false });
  
      twitchLogin.loadURL(url);

      twitchLogin.once('ready-to-show', () => {
        twitchLogin.show();
      })
      
      event.newGuest = twitchLogin;
  
      twitchLogin.on('closed', () => {
        twitchLogin = null;
        mainWindow.webContents.send('twitchAuth');
      });
    }
  });

  ipcMain.on('closeApp', (event, args) => {
    mainWindow.close();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('restore', () => {
    mainWindow.show();
  });
});
