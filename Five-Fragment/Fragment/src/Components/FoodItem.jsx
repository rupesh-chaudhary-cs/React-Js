
import css from './FoodItem.module.css';
const FoodItem=({food,handleronClick1,bought})=>{
     
    // const handleronClick=(e)=>{
    //     console.log(e);
    //     console.log(`${food} is bought`)

    // }


    return <li key={food} className={` ${css["kg-button"]} list-group-item ${bought && "active"}`}><span className={`${css["kg-span"]}`}>{food}
    <button
     onClick={handleronClick1}
     className={`${css['new-button']} btn btn-info`}>Buy</button></span></li>
}
export default FoodItem;  