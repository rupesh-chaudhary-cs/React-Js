import css from "./Display.module.css"
const Display=({calVal3})=>{
    return <input 
    value={calVal3}
    className={`${css.input}`} type='text' id='display'/>;
}
export default Display;