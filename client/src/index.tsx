import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import homeAPI from "../api/homeAPI";
import HomeApi from "../api/homeAPI";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(<div><HomeApi/></div>);

// const callHomeAPI = async () => {
//     const response = await fetch ("/")
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message) 
//     }

//     return body
// }

// console.log(callHomeAPI())

// export default class Home extends React.Component {
//   constructor(props: string) {
//     super(props)
//     this.state = {response: ""};
//   }

//   getData() {
//     // const [data, setData] = useState({});

//     useEffect(() => {
//       fetch("http://localhost:3000")
//       .then(res => res.json())
//       .then(data => this.setState({ response: data }))
//     }, [])
//     console.log(this.state)
//     return this.state
//   }
// }