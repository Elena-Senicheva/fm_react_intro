const container = document.getElementById("root");

/*const reactElement = React.createElement("h1", {
  title: "Hello react!",
  className: "heading",
}, "Hello React.js!");

console.log(reactElement);

ReactDOM.render(reactElement, container);*/

class Heading extends React.Component {
  render() {
    return React.createElement(
      "h1",
      {
        title: "Hello react!",
        className: "heading",
      },
      "Hello React.js!"
    );
  }
}
const reactElement = React.createElement(Heading);

ReactDOM.render(reactElement, container);