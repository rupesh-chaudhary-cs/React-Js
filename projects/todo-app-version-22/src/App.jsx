import Appname from "./Components/Appname";
import AddToDo from "./Components/AddToDo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState,useRef } from "react";
import { use } from "react";
import ErrorMessage from "./Components/ErrorMessage";
function App() {
    // let todoItems = [
    //     {
    //         name: "Buy Milk",
    //         date: "4/12/2025",
    //     },
    //     {
    //         name:"Go to College",
    //         date:"9/12/2024"
    //     },
    //     {
    //         name:"Study NOW",
    //         date:"1/12/2023"
    //     }
    // ];
    let [todoItems,settodoItems]=useState(

        [
        {
            name: "Buy Milk",
            date: "4/12/2025",
        },
        {
            name:"Go to College",
            date:"9/12/2024"
        },
        {
            name:"Study NOW",
            date:"1/12/2023"
        }
    ]
    )
    // let [newName,setnewName]=useState("");
    // const onInput=(e)=>{
    //     setnewName(e.target.value);
    //     console.log(newName);
    // }
    // let [newDate,setnewDate]=useState("");
    // const onDate=(e)=>{
    //     setnewDate(e.target.value);
    //     console.log(newDate);
    // }
    let newName=useRef();
    let newDate=useRef();
    

    const onClick=(e)=>{
        e.preventDefault()
        
        let newName1=newName.current.value;
        let newDate1=newDate.current.value;

        if(newName1 !="" && newDate1 !=""){
            let newItem={
            name:newName1,
            date:newDate1,
        }
        // let finalItem=[...todoItems,newItem];
        // settodoItems(finalItem);
        settodoItems((curValue)=>{
            return [...curValue,newItem]
            
        })
        newName.current.value="";
        newDate.current.value="";
        // event.preventDefault();  /*Form in React Js*/
        console.log("button is clicked");

        }
        // let newItem={
        //     name:newName,
        //     date:newDate,
        // }
        // let finalItem=[...todoItems,newItem];
        // settodoItems(finalItem);
        // console.log("button is clicked");
        // setnewName(" ");
        // setnewDate(" ");
        
    }
    const onDeletenow=(name3,date3)=>{
        let finalItems=todoItems.filter((val44)=>{
            return (
                val44.name!=name3,
                val44.date!=date3
            )
        })
        settodoItems(finalItems);
        console.log(`delete item named:${name3} and date :${date3}`)
    }


    return (
        <center className="todo-container">
            <Appname />
            <AddToDo newName={newName} newDate={newDate} handleronClick={onClick} ></AddToDo>
            <ErrorMessage todoItems1={todoItems}></ErrorMessage>
            <TodoItems onDelete={onDeletenow}todoItems={todoItems}></TodoItems>
        </center>
    );
}
export default App;
