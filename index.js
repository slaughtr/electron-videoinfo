const electron = require('electron')
const { app, BrowserWindow, ipcMain } = electron
const ffmpeg = require('fluent-ffmpeg')

app.on('ready', () => {
	const mainWindow = new BrowserWindow({})
	mainWindow.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('videosubmitted', (event, path) => {
	ffmpeg.ffprobe(path, (err, metadata) => {
		console.log('alkjsdfl;askjdf;alkjsdf;lkasj')
		console.log(require('util').inspect(metadata, false, null))
	})
})