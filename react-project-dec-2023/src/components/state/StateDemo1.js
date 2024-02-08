import React, { Component } from "react";

export default class StateDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state is a pre-defined keyword
      counter: 0, // Counter is a state variable,
    };
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    }); // setState() is Asynchronous
  };

  render() {
    return (
      <>
        <div>Counter value is {this.state.counter} </div>
        <p>
          <button onClick={this.increment}>Increment</button>
        </p>
      </>
    );
  }
}
