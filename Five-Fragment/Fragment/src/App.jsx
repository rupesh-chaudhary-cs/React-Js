import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import AppName from "./Components/AppName";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";


function App() {

//   let foodItems=['Rice','Dal','Vegetables','Milk','Apple',"Mango"];
  let[foodItems,setFoodItems]=useState(['Rice','Dal','Vegetables','Milk','Apple',"Mango"]);


  // if(foodItems.length==0){
  //   return <h1>I am still hungry.</h1> /*this is of if-else condition*/
  // }
//   let [texttoShow,setTextValue]=useState("These are healthy foods")
//   let texttoShow="These are healthy foods"
  const onKeyDown=(e)=>{
    if(e.key=="Enter"){
        let newFood=e.target.value;
        console.log(e.target.value);
        console.log(e)
        e.target.value=" ";
        let allFood=[...foodItems,newFood];
        setFoodItems(allFood);

    }
   }




    return (
        <>
        <Container>
            <AppName></AppName>
            <FoodInput handleronkeydown={onKeyDown}></FoodInput>
            {/* <div>{texttoShow}</div> */}
            <ErrorMessage foodItems={foodItems}></ErrorMessage>
            <FoodItems  foodItems={foodItems} ></FoodItems>
          
        </Container>

        {/* <Container>
            <p>
                Above are the list of all the healthy foods to eat
            </p>
            <pre>
                I am eating these foods for good health
            </pre>
        </Container> */}
        {/* // <Container>
        //     <AppName></AppName>
        //     {/* /* {foodItems.length==0?<h1>I am still hungry</h1>:null} /*this is of terniary operator8*/  }
            {/* {foodItems.length==0 && <h1>I am still hungry</h1>} */}
        {/* //     <ErrorMessage foodItems={foodItems}></ErrorMessage>
             */}
        {/* //     <FoodItems foodItems={foodItems}></FoodItems> */}
             {/* <ul class="list-group">
        //         <li class="list-group-item">Dal</li>
        //         <li class="list-group-item">Vegetables</li>
        //         <li class="list-group-item">Rice</li>
        //         <li class="list-group-item">Milk</li>
        //         <li class="list-group-item">Apple</li>
        //     </ul> */}
        
        </>
    );
}
export default App;