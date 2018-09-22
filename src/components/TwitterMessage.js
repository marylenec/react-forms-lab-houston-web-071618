import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars
    };
  }

  handleChange = (e) => {
    // debugger
    this.setState({
      [e.target.name]: e.target.value,
      maxChars: parseInt(this.props.maxChars) - parseInt(e.target.value.length),
    }, () => {console.log(this.state)})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="maxChars" id="maxChars" onChange={(e) => this.handleChange(e)}/>
        <br/>
        Characters remaining: {this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
