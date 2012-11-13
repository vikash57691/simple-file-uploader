var config = require('./config');
var http = require('http');
var url = require('url');

function start(route, handle) {

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		var postData = '';

		request.setEncoding('utf8');

		request.addListener('data', function(postDataChunk) {
			postData += postDataChunk;
		});

		request.addListener('end', function() {
			route(handle, pathname, response, postData);
		});
	}

	http.createServer(onRequest).listen(config.port);
}

exports.start = start;