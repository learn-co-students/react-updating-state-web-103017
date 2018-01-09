import React from "react";

export default class ClickityClick extends React.Component {
  handleClick = () => {
    if (this.state.hasBeenClicked === false) {
      this.setState = true;
    } else {
      this.setState = false;
    }
  };
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    };
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? "" : "not"} been clicked!</p>
        <button onClick={this.handleClick()}>Click me!</button>
      </div>
    );
  }
}
