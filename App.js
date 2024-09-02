import React from "react";
import ReactDOM from "react-dom/client";

// React element

const heading = React.createElement("h1", { id: "heading" }, "React Course🚀"); // this is an js object

// when we render it in dom then convert into html

// JSX: provide easy syntax for react, not necessary to build react applicaton.
// jsx is not html in javascript, it's html like syntax or xml like syntax.
// jsx => React.createElement => ReactElement-JS Ojbect => HTMLElement(render).
// const jsxHeading = <h1 id="heading" className="first-heading">React course using JSX 🚀</h1>

// React element
const jsxHeading = (
  <h1 id="heading" className="first-heading">
    React course using JSX 🚀
  </h1>
);

console.log(heading);
console.log(jsxHeading);

/*
    React Component 
      1. Class Based Component : OLD
      2. Functional Component : NEW




*/

// react function component : return React element

// const HeadingComponent = () => {
//     return <h1>React course Functional Component</h1>
// }

// const HeadingComponent = () => <h1 className="heading">React course Functional Component</h1>

// const Title = () => (
//     <h1 className="title">React course using JSX 🚀</h1>
// )

const Title = function () {
  return <h1 className="title">React course using JSX 🚀</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    {/* to run javascript inside jsx, we can run inside {} bracket 
        jsx after sanatization inject data, it take care of mellecious data don't inject.
    */}
    {heading}
    {console.log("kjasdfhkajdfhlasdjf;laskdfjslkjdaflkdjf")}
    {/* inject Title Component inside Heading Component. this is called component composition */}
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="heading">React course Functional Component</h1>
    <h1 className="heading">React course Functional Component</h1>
    <h1 className="heading">React course Functional Component</h1>
  </div>
); // multiline functional component.

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading); // will replace with root element from html
root.render(<HeadingComponent />); // render functional component.
