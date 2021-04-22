/*App-Function*/

import React from 'react';
//import ReactDOM from 'react-dom'; -> 不需要

function Header() {
  return (
    <div>
      <h1>Function - ver</h1>
    </div>
  );
}

function Content() {
  return (
    <div>
      <h2>Content</h2>
      <p>The content text!!!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
