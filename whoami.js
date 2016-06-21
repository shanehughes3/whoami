var express = require("express"),
    app = express();

app.get("/", function(req, res) {
    var ip = req.connection.remoteAddress.split(':').pop();
    var lang = req.headers["accept-language"].split(',');
    var os = /\(([^)]+)\)/.exec(req.headers["user-agent"]);
    var output = {
	ip: ip,
	language: lang[0],
	os: os[1]
    };
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(output));
});

app.listen(process.env.PORT || 80);
