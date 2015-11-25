var React = require("react");
var ReactDOMServer = require("react-dom/server");
var PropTypes = React.PropTypes;

var styles = {
    email_heading: {
    fontSize: "1.5em",
    fontWeight: "bold", 
    color: "#181818",
    padding: "0 0 10px 0",
    display: "block",
    width: "100%"
  }
};

class EmailHeading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2 id={this.props.id}
          className='hw-email-heading'
          style={styles.email_heading }>
        {this.props.text}
      </h2>
    );
  }

}

EmailHeading.propTypes = {
  text: React.PropTypes.string.isRequired
};


module.exports = EmailHeading;