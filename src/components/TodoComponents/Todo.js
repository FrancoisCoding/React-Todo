import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todo: {
        task: ""
      }
    };
  }
  render() {
    return (
      <>
        <ol>
          <li onClick={this.props.onClick}>{this.props.todo.task}</li>
        </ol>
      </>
    );
  }
}
