import Appname from "./Components/Appname";
import AddToDo from "./Components/AddToDo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";
function App() {
    return (
        <center className="todo-container">
            <Appname/>
            <AddToDo/>
            <div className="text-container">
            <TodoItem1></TodoItem1>
            <TodoItem2/>
            </div>
        </center>
    );
}
export default App;
