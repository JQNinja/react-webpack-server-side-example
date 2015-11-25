var React = require("react");
var ReactDOMServer = require("react-dom/server")
var EmailHeading = require("../app/email_heading.jsx");


module.exports = function(req) {

	return ReactDOMServer.renderToStaticMarkup(
		<html>
			<head>
				<title>Boo ya!</title>
			</head>
			<body>
				<EmailHeading text="Boo ya!"/>
			</body>
		</html>
	);
}



