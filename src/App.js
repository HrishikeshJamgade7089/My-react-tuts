import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [alert,setAlert] =useState(null);
 
const showAlert = (message,type)=>{
  setAlert({
    msg:message,
    type:type,
  })
  setTimeout(()=>{
    setAlert(null);

  },1500);
}



  const toggle=()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#001434';
      showAlert(" Dark Mode has been enabled.","success ");
      // document.title = 'TextUtils - Dark';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" light Mode has been enabled.","success ");
      // document.title = 'TextUtils - Light';
    }
  }
  return (
    <>
      <Router>
        <Navbar title = "Hrishi'sDev" mode={mode} toggle={toggle} />
        <Alert alert={alert}/>
        <div className='container my-3'>
        <Routes>
          <Route exact path="/about" element={<About />} />
            
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
            
          
        </Routes> 
        {/* <TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert}/> */}
        </div>
      </Router>
      {/* {/* <About/> */}
    </>
  );
}

export default App;
