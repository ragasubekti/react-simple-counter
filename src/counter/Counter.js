import React, { Component } from "react";

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
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.onButtonIncrementPressed}>Increment</button>
        <button onClick={this.onButtonDecrementPressed}>Decrement</button>
      </div>
    );
  }
}
