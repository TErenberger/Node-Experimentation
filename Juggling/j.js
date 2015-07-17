var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;

function print() {
  for(var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function get(index) {
  http.get(process.argv[2 + index], function(response) {
    response.pipe(bl(function(err, data) {
      if(err) return console.error(err);
      results[index] = data.toString();
      count++;

      if(count === 3) print();
    }));
  });
}

for(var i = 0; i < 3; i++) {
  get(i);
}

// oh boy
// http.get(process.argv[2], function(response) {
//   response.setEncoding('utf8');
//   response.pipe(bl(function(err, data) {
//     if(err) return console.error(err);
//     results.push(data.toString());
//     http.get(process.argv[3], function(response) {
//       response.setEncoding('utf8');
//       response.pipe(bl(function(err, data) {
//         if(err) return console.error(err);
//         results.push(data.toString());
//         http.get(process.argv[4], function(response) {
//           response.setEncoding('utf8');
//           response.pipe(bl(function(err, data) {
//             if(err) return console.error(err);
//             results.push(data.toString());
//             for(var i = 0; i < 3; i++) {
//               console.log(results[i]);
//             }
//           }));
//         });
//       }));
//     });
//   }));
// });
