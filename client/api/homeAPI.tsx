// import { useState, useEffect } from "react";

// const getData = () => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch("/")
//     .then(res => res.json())
//     .then(data => setData(data))
//   }, [])
  
//   return (
//     data
//   )
// }

// export default getData;

import React, { Component } from "react";

interface IProps {
}

interface IState {
  response: string;
}

export default class HomeApi extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {response: ""};
  }

  callApi() {
    fetch("http://localhost:3000")
    .then(res => res.json())
    .then(data => this.setState({ response: data }))
    .catch(err => err);
  }

  componentDidMount(): void {
    this.callApi();
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.response.greeting}
      </div>
    )
  }
}