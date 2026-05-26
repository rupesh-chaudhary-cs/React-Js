import css from "./FoodItem.module.css";
const FoodItem = ({val,handlerButton,bought}) => {
    
    return (
        <li className={`${css["kg-Item3"]} list-group-item ${bought && "active"}`}>
        <span className={`${css["kg-val"]}`}>{val}</span>
        <button className={`${css["button"]} btn btn-info`}
        onClick={handlerButton}
        >Buy</button>
        </li>
    );
};
export default FoodItem;
