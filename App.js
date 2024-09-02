import React from "react";
import ReactDOM from "react-dom/client";


/*
    create a nested structure

    <div>
        <div id="parent">
            <h1></h1>    
        </div>
    </div>




*/

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child",},
        [ React.createElement("h1",{},"This is a React course🚀"),
            React.createElement("h2",{},"I'm h2 tage")
         ]
    ),
    React.createElement("div",{id:"child",},
        [ React.createElement("h1",{},"I'm a h1 tag"),
            React.createElement("h2",{},"I'm h2 tage")
         ]
    )]
);

const heading = React.createElement("h1",
     {id:"heading",xyz:"xyz"}, // we can provide class and id here related to tag.
     "Hello World from React!");

console.log(heading);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // responsible to put heading into root element.

root.render(parent);