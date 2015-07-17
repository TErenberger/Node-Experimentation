var ls = require('./ls.js');

ls(process.argv[2], process.argv[3], function(err, data) {
  if(err) console.log(err);
  
  data.map(function(l){
    console.log(l);
  });
});
