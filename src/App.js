import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [darkText, setdarkText] = useState('');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert(
      {
        msg:message,
        type:type
      }
    );
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setmode('light');
      setdarkText('');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }
    else{
      setmode('dark');
      setdarkText('text-light');
      document.body.style.backgroundColor='#325885';
      showAlert("Dark mode is enabled","success");
    }
  }
  return (
    <>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} darkText={darkText}/>
    <Alert alert={alert}/>
    <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
