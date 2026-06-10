import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AppName from './Components/AppName'
import Weatherdata from './Components/Weatherdata'
import Input from './Components/Input'

function App() {
  
  const [initialPost,setFinalPost]=useState([]);

  const addPost=(name,temperature)=>{
    let newPost=[{name:name,temperature:temperature}];
    setFinalPost(newPost)
  }
 
  const [city,setCity]=useState("");
  const handleronClick1=(cityVal)=>{
      
        console.log(cityVal);
        setCity(cityVal);
        
    }

  

  return <center>
    <AppName></AppName>
    <Input handleronClick1={handleronClick1}></Input>
    <Weatherdata initialPost={initialPost} addPost={addPost} cityVal={city}/>
  </center>
  
  
}

export default App;
