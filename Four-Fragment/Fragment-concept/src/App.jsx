import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems=[];
//   let foodItems=['Dal','Green Vegetables','Rice','Milk','Salad',"Ghee"];
  // if(foodItems.length===0){
  //   return <h3>I am still Hungry</h3>
  // }
    // let result=foodItems.length==0?<h3>I am still Hungry</h3>:null;
    // const[textToShow,setTextToShow]=[]
    let[foodItems,setFoodItems]=useState([]);
    // if(key==="Enter"){
    //     newFoodItem=e.target.value;
    // }
    // let [textToShow,setTextValue]=useState("This is a new text");
    
    const inputHandler=(e)=>{
        console.log(e);
        // console.log(e.target.value);
        if(e.key==="Enter"){
            let newFoodItem=e.target.value;
            console.log(newFoodItem);
            e.target.value="";
            
            let foodItems2=[...foodItems,newFoodItem];
            
            setFoodItems(foodItems2);
            
        }
        
        
    
    }
    return (
        <>
        <Container>
            <h1 className="food-heading">Healthy Foods</h1>
            <FoodInput inputHandler={inputHandler}></FoodInput>
            <ErrorMessage foodItems={foodItems}></ErrorMessage>
            <FoodItems foodItems={foodItems}></FoodItems>
            {/* {foodItems.length==0?<h3>I am still Hungry</h3>:null}  first of doing it */}
            {/* {result} second way of doing it */}
            {/* {foodItems.length==0 && <h3>I am still Hungry</h3>} third way of doing it using logical opeartor */}
            {/* <ul className="list-group">
                {foodItems.map((val)=>(
                  <li key={val} className="list-group-item">{val}</li>
                ))}
              
                
            </ul> */}
        </Container>
        <Container>
        <p>This is the list of all the healthy foods that we need to eat to remain healthy</p>
        </Container>
        </>
    );
}

export default App;
