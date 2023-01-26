import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import ParentClass from "./components/ParentClass";

const App = () => {
  return (
    <div>
      <ParentClass />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
