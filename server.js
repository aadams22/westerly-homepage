var express = require('express');
var morgan = require('morgan');
var ngrok = require('ngrok');

app = express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(3000,function(){

});

// ngrok http -auth="westerly:doodle" 3000

ngrok.connect({
	proto: 'http',
	addr: 3000,
	auth: 'user:pwd',
	region: 'us'
}, function(err, url){});
