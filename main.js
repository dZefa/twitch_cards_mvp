const { app, BrowserWindow, ipcMain, net } = require('electron');

app.on('ready', () => {
  let mainWindow = new BrowserWindow({ width: 1280, height: 720 });

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

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
      let twitchLogin = new BrowserWindow();
  
      twitchLogin.loadURL(url);
      
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

  ipcMain.on('minimizeApp', (event, args) => {
    mainWindow.minimize();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
