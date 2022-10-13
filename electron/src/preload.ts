import {contextBridge} from 'electron';

contextBridge.exposeInMainWorld('electronAPI',{
    hello:'hello from node'
})