import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm.js";
import Alert from "./Components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
  };
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode is Enabled", "sucess");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is Enabled", "sucess");
    }
  };

  return (
    <>
      <Navbar aboutText="newText" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container" my-3="true">
        <TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />
      </div>
    </>
  );
}
export default App;
