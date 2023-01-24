import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import { Audio } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
