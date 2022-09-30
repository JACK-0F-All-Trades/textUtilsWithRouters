// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

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
    if(mode==="light"){
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#001534";
      
      showAlert("Dark mode enabled","success");
      
    }
    else{
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled","success");
    }
  }

  return (
    <>
      <Navbar title="Welcome" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter Your Text Below"/>
      
      {/* <About/> */}
    </>
  );
}

export default App;
