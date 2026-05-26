import Buttons from "./Components/Buttons"
import css from "./App.module.css"
import Display from "./Components/Display"
function App() {
  
  let Val=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return <div className={`${css.calculator}`}>
    <Display></Display>
    <Buttons val={Val}></Buttons>
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
