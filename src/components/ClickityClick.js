// Code ClickityClick Component Here
// src/components/ClickityClick.js
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
  }

  handleClick = () => {
    // this.setState({
    //   hasBeenClicked: true
    // })

    //Preferred way
    this.setState({
      hasBeenClicked: true,
      addressInfo: {
        ...this.state.addressInfo,
        city: 'New York City',
      },
    }, () => console.log(this.state.hasBeenClicked));

    // this.setState({
    //   addressInfo: Object.assign({}, this.state.addressInfo, {
    //     city: 'New York City',
    //   }),
    // });
    console.log(this.state.hasBeenClicked);
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
