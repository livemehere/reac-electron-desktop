import {app, BrowserWindow} from 'electron';
import * as path from "path";

const WIDTH = 1920;
const HEIGHT = 1080;

const isDev = process.env.NODE_ENV === 'development';

class Main {
    private win: BrowserWindow | undefined;
    private app = app;

    private constructor() {
        this.ready();
    }

    static init(){
        return new Main();
    }

    private createWindow(){
        this.win = new BrowserWindow({
            width:WIDTH,
            height:HEIGHT,
            webPreferences:{
                preload:path.join(__dirname, '../dist/preload.js')
            }
        })
        this.win.loadURL('http://127.0.0.1:5173');

        isDev && this.win.webContents.openDevTools();

        // for windows
        this.app.on('window-all-closed',()=>{
            if(process.platform !== 'darwin') this.app.quit();
        })

        // for macOS
        this.app.on('activate',()=>{
            if(BrowserWindow.getAllWindows().length === 0) this.createWindow();
        })

    }

    private ready(){
        this.app.whenReady().then(()=>{
            this.createWindow();
        })
    }
}

Main.init();