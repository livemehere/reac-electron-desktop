import {app, BrowserWindow} from 'electron';

const WIDTH = 1920;
const HEIGHT = 1080;

const isDev = process.env.NODE_ENV === 'development';

class Main {
    private win: BrowserWindow | undefined;
    private app = app;

    private constructor() {
        this.ready();
        console.log('node env',process.env.NODE_ENV)
    }

    static init(){
        return new Main();
    }

    private createWindow(){
        this.win = new BrowserWindow({
            width:WIDTH,
            height:HEIGHT
        })
        this.win.loadURL('http://127.0.0.1:5173');
        if(isDev){
            this.win.webContents.openDevTools();
        }
    }

    private ready(){
        this.app.whenReady().then(()=>{
            this.createWindow();
        })
    }
}

Main.init();