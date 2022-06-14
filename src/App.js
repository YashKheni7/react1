
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";


function App() {
  const [mode, setMod] = useState('light'); 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
      setAlert({
        msg : message,
        type : type
      })  
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light'){
    setMod('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been Enable","success")
    document.title ="Textutils - Dark MOde"
  }
  else{
    setMod('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been Enable","success")
    document.title= "Textutils - Light MOde"


  }
}
  return (
   <>
   {/* <Router> */}
   <Navbar title='Dogemon' about='Contact' mode={mode} toggleMode={toggleMode}/> 
   <Alert alert={alert}/>
<div className="container">
{/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <TextForm showAlert={showAlert} heading='Enter the text to analyze below'  mode={mode}/>
          {/* </Route>
        </Switch> */}
</div>
{/* <About/> */}
{/* </Router> */}
    </>
  );
}
export default App;
