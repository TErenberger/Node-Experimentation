var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(err, files) {
  files = files.filter(function(current){
    return path.extname(current) ===  '.'+ process.argv[3];
  });
  files.map(function(current){
    console.log(current);
  });
});
