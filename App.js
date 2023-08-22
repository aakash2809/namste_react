const heading = React.createElement( "div",{ id: "parent" },[
    React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "child-head1" }, "child1 head h1"),
    React.createElement("h2", { id: "child-head2" }, "child1 head h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "child2-head1" }, "child2 head h1"),
    React.createElement("h2", { id: "child2-head2" }, "child2 head h2"),
  ]),


]
);
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);
