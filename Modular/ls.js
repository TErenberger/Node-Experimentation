var fs = require('fs');
var path = require('path');

module.exports = function (dirName, ext, callback) {
  fs.readdir(dirName, function(err, files) {
    if(err) return callback(err);
    files = files.filter(function(fileName){
      return path.extname(fileName) === '.' + ext;
    })
    callback(null, files);
  });
};
