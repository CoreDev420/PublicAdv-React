import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./component/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
