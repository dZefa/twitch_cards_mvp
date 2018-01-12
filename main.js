const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  let mainWindow = new BrowserWindow({ width: 1280, height: 800 });

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
  mainWindow.show();
  mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
