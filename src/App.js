import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light'); // darkmode enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    },1500)
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled! ", 'success');
      document.title = 'TextUtils - Dark Mode'
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled! ", 'success');
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Alert alert={alert}/>
    <Switch>
          <Route path="/about">
          <About mode={mode}/>
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Text Converter" mode={mode}/>
          </Route>
          </Switch>
          </div>
        </Router>
    </>
  );
}

export default App;
