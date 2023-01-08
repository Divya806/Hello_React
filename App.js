import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h1', {id: "title"},"This is a heading1");
const heading2 = React.createElement('h1', {id: "titletext"}, "This is a heading2");

const container = React.createElement('div',{id: "container", hello: "world"}, [heading1, heading2])
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
