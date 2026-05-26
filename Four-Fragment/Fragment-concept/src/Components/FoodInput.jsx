import css from './FoodInput.module.css';
const FoodInput=({inputHandler})=>{
    const changeHandler=(e)=>{
        console.log(e.target.value)
    }
    return <input type="text" placeholder='Enter Food Item Here' className={`${css.input1}`}
    onKeyDown={inputHandler}
    />

}
export default FoodInput;