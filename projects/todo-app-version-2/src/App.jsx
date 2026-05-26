import Appname from "./Components/Appname";
import AddToDo from "./Components/AddToDo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
function App() {
    let todoItems = [
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
    ];
    return (
        <center className="todo-container">
            <Appname />
            <AddToDo />
            <TodoItems todoItems={todoItems}></TodoItems>
        </center>
    );
}
export default App;
