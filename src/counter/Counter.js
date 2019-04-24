import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";

import "react-awesome-button/dist/styles.css";
import "./Counter.css";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };

    this.onButtonDecrementPressed = this.onButtonDecrementPressed.bind(this);
    this.onButtonIncrementPressed = this.onButtonIncrementPressed.bind(this);
  }

  onButtonDecrementPressed() {
    if (!this.state.counter <= 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  onButtonIncrementPressed() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="counter">
        <h1 className="really-big-text">{this.state.counter}</h1>
        <AwesomeButton type="primary" onPress={this.onButtonIncrementPressed}>
          Increment
        </AwesomeButton>
        <div className="margin-5" />
        <AwesomeButton type="primary" onPress={this.onButtonDecrementPressed}>
          Decrement
        </AwesomeButton>
      </div>
    );
  }
}
