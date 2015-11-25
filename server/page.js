var React = require("react");
var ReactDOMServer = require("react-dom/server")
var Application = require("../app/Application.jsx");
//var styleCollector = require("./style-collector");

module.exports = function(req) {

	return ReactDOMServer.renderToStaticMarkup(
		<html>
			<head>
				<title>Help me!</title>
			</head>
			<body>
				<Application url={req.url}/>
			</body>
		</html>
	);
}