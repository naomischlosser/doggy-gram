import React, { Component } from "react";

interface IProps {
}

interface IState {
  greeting: string;
}

export default class HomeApi extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { greeting: "" }
  }

  callApi() {
    fetch("http://localhost:3000")
    .then(res => res.json())
    .then(data => this.setState(data))
    .catch(err => err);
  }

  componentDidMount(): void {
    this.callApi();
  }

  render() {
    return (
      <div>
        {this.state.greeting}
      </div>
    )
  }
}