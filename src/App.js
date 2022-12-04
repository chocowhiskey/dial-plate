import logo from "./logo.svg";
import "./App.css";

function drawCircle(
  backgroundColor = "palegreen",
  backgroundColorSmallCircles = "transparent"
) {
  // test comment
  // todo: div circle mit svg ersetzen
  return (
    <div className="circle-parent">
      <div
        className="circle"
        style={{ backgroundColor: backgroundColor }}
        onMouseDown={mouseDown}
      >
        <div
          className="smallCircle"
          style={{ backgroundColor: backgroundColorSmallCircles }}
          onClick={() => console.log("I was clicked!")}
        ></div>
      </div>
    </div>
  );
}

function mouseDown() {
  console.log("i am mouse down");
  console.log(document.getElementsByClassName("circle"));
  // document.getElementsByClassName("circle").style.color = "red";
}

function App() {
  return (
    <div className="App">
      {drawCircle()}
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
