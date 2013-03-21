var manifest = require('../component.json');
var fs = require('fs');
var path = require('path');
var dir = fs.readdirSync('icons').filter(function(file){
  if(file[0] !== '.') return file;
  return false;
});

dir = dir.map(function(file){
  return "icons/" + file;
});

manifest.files = dir;
var manifestFile = path.resolve('component.json');
fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2));