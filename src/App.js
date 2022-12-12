import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>This React app is running in a docker container on AWS EC2.</h3>
        <p>
          Can you see the env variables followed?{" "}
          {process.env.REACT_APP_TEST_ENV}
        </p>
      </header>
    </div>
  );
}

export default App;
