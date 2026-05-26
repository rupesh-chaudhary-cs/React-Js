import { useState } from "react";
import FoodItem from "./FoodItem";

const FoodItems = ({foodItems}) => {
    // let foodItems=['Dal','Green Vegetables','Rice','Milk','Salad',"Ghee"];
    let [activeItems,setActiveItems]=useState([]);
    
    let onBuyButon=(val,e)=>{
        let newItems=[...activeItems,val];
        setActiveItems(newItems);
    };

    return (
        <ul className="list-group ul-class">
            {foodItems.map((val) => (
                <FoodItem key={val} val={val}
                bought={activeItems.includes(val)}
                handlerButton={(e)=>(onBuyButon(val,e))}
                    // console.log(e);
                    // console.log(`${val} is bought`);

                
                ></FoodItem>
            ))}
        </ul>
    );
};
export default FoodItems;
