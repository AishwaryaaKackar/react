import  React from "react";
import  ReactDOM  from "react-dom/client";

// const heading = React.createElement("div",{id:"parent"},
// [
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"Hello from React"),
//         React.createElement("h2",{},"Hello h2 from React")
//     ])
// ]);    
// console.log(heading);
const jsxHead=(
    <div>
    <h1 id="heading">Hello from jsx heading</h1>
    </div>
);

const Title = () => {
    return <h1> This is a heading with a functional component</h1>
}

const HeadingComponent = function(){
    return (<div>
        <h1>This is heading component</h1>
        <h2>This is sub heading</h2>
        <Title></Title>
        {jsxHead}
    </div>)
}
console.log(jsxHead);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);