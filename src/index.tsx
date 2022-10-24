import React from 'react'
import ReactDOM from 'react-dom/client'

// ReactDOM.createRoot(document.getElementById("root"))
// .render(<div>This is DoggyGram!</div>)

// (method) Document.getElementById(elementId: string): HTMLElement | null

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <div>This is DoggyGram!</div>
  );