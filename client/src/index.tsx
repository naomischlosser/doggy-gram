import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import HomeApi from "./api/homeAPI";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(<div><HomeApi/></div>);