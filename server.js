var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var port = process.env.PORT || 8080;

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));


app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
}).listen(port);

// app.listen(process.env.PORT || 3000, 'localhost', function(err) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log('Listening');
// });