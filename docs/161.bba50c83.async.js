(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{vbkW:function(a,c,n){(function(o){var i=n("Og1z"),e=n("33yf"),r=e.join(o,"path.txt");function l(){var t;if(i.existsSync(r)&&(t=i.readFileSync(r,"utf-8")),Object({NODE_ENV:"production"}).ELECTRON_OVERRIDE_DIST_PATH)return e.join(Object({NODE_ENV:"production"}).ELECTRON_OVERRIDE_DIST_PATH,t||"electron");if(t)return e.join(o,"dist",t);throw new Error("Electron failed to install correctly, please delete node_modules/electron and try installing again")}a.exports=l()}).call(this,"/")}}]);