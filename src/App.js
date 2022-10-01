// import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [theme, setTheme] = useState({
  //   display: "none"
  // })

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#001534";

      showAlert("Dark mode enabled", "success");

    }
    else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Welcome" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <TextForm showAlert={showAlert} heading="Enter Your Text Below" /> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text Below" />} />

        </Routes>


        {/* <About/> */}

      </Router>
    </>
  );
}

export default App;
