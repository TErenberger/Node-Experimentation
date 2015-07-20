var http = require('http');


http.get('http://amsweb11/api/PcubedInput/MotorFamily', function(response){
  response.on("data", function(data) {
    JSON.parse(data.toString()).map(function(single){console.log(single);});
  });
});
