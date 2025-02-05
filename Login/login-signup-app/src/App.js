import logo from "./logo.svg";
import "./App.css";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <div className="div">
        <LoginSignup />
      </div>
      <FontAwesomeIcon icon="fa-solid fa-user" />
    </>
  );
}

export default App;
