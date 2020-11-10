const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 300, //стандартная ширина окна
        height: 400, //стандартная высота окна
        icon: __dirname + "/static/img/icon.png", // добавленик иконки 
        resizable: false, // будет ли окно изменять размеры
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'), // файл первого html шаблона,
        protocol: 'file',
        slashes: true
    }));

    // win.webContents.openDevTools(); // open Dev Tools

    win.on('closed', () => {
        win - null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});