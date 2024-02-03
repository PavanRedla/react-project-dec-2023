import React, { Component } from "react";

export default class GreetDemo1 extends Component {
  render() {
    return (
      <>
        <h3>
          Hi {this.props.name}, {this.props.msg}
        </h3>
      </>
    );
  }
}
