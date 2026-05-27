import css from './FoodInput.module.css';
const FoodInput=({handleronkeydown})=>{
    
    return <input
     type="text" 
     className={css.foodinput}
     placeholder="Enter Food Item Here"
     onKeyDown={handleronkeydown}
     />
}
export default FoodInput;