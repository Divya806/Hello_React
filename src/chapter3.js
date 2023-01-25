import React from 'react';
import ReactDOM from 'react-dom/client';

/* Complication using JSX when we need to write multiple ELements */

// const container = React.createElement("div",{}, React.createElement (
//     "h1", {id:"hhjjk"}, "hello world"
// )
//   , React.createElement (
//     "h1", {}, "hello world"
// ))

// const heading1 = React.createElement (
//     "h1", {}, "hello world"
// )


/* React Elememnt */

const heading = () =>(
    <h1>hhhhhhhhhhhhhhhhhhhh</h1>
)

/* at the end of the day all the Elements/JSX are react objects in React */
console.log(heading);


/* Two ways of wiriting React functional compoennts */

const HeaderComponent = () => {
    return (
        <div>
        {heading()}
        <h1>This is a namsste React</h1>
        <h2>Trying to check multiple things</h2>
        </div>
    )
}

const HeaderComponent2 = (
        <div>
        <h1>This is a namsste React</h1>
        <h2>Trying to check multiple things</h2>
        </div>
    )

const TitleElement = (
    <h2>This is a title tag</h2>
)

const TitleComponent = () => {
    return(
        <div>
            {TitleElement}
            <h1>This isa title component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TitleComponent />);