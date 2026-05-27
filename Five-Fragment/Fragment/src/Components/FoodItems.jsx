import { useState } from "react";
import FoodItem from "./FoodItem";

const FoodItems = ({ foodItems }) => {
   let[activeItem,setItem]=useState([]);
   let hanleronBuy=(e,val)=>{
        let newItem=[...activeItem,val];
        setItem(newItem);
        console.log(`${val} is bought`);

    };
    return<ul className="list-group">
        {foodItems.map((val) => (
            <FoodItem key={val} 
            food={val}
            handleronClick1={(e)=>{
                hanleronBuy(e,val)
            }}
            bought={activeItem.includes(val)}
            
            ></FoodItem>
            

    
        ))}
    </ul>
}
export default FoodItems;
