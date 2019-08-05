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
    return <div>Tasks: {this.props.todo.task}</div>;
  }
}
