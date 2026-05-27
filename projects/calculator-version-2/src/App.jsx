import Buttons from "./Components/Buttons"
import css from "./App.module.css"
import Display from "./Components/Display"
import { useState } from "react";
function App() {
  
  let Val=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  let [calVal,setCalVal]=useState("");
  
  const handleClick=(e,val3)=>{
    
    if(val3=='C'){
      setCalVal("");
    }else if(val3=="="){
      const result=eval(calVal);
      setCalVal(result);


    }else{
      let newVal=val3;
      let finalVal=calVal+newVal;
      setCalVal(finalVal);
    }
    // let finalVal=calVal+newVal;
    // setCalVal(finalVal);

    console.log(`${val3} is clicked`);
  }


  return <div className={`${css.calculator}`}>
    <Display calVal3={calVal}></Display>
    <Buttons val={Val} handleronClick={handleClick}></Buttons>
    {/* <div className={`${css["buttons-container"]}`}>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>1</button>
      <button className={`${css.buttons}`}>2</button>
      <button className={`${css.buttons}`}>+</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>

    </div> */}

  </div>
}

export default App
