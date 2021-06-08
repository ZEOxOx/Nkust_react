/*Arrow Function*/

import React from 'react';
//import ReactDOM from 'react-dom'; -> 不需要

const Header = () => (
    <div>
        <h1>Arrow Function - ver</h1>
    </div>
);

const Content = () => (
    <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
    </div>
);

const App = () => (
    <div>
        <Header />
        <Content />
    </div>
);

export default App;