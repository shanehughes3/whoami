var express = require("express"),
    app = express();

app.get("/", function(req, res) {
    var lang = req.headers["accept-language"].split(',');
    var os = /\(([^)]+)\)/.exec(req.headers["user-agent"]);
    var output = {
	ip: req.connection.remoteAddress,
	language: lang[0],
	os: os[1]
    };
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(output));
});

app.listen(process.env.PORT || 80);
