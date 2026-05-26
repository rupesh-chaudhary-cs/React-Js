import TodoItem from "./TodoItem";
import css from './TodoItems.module.css';
const TodoItems = ({todoItems}) => {
    return (
        <div className={`${css["text-container"]}`}>
            {todoItems.map((val)=>(
                <TodoItem key={val.name} todoName={val.name} todoDate={val.date}></TodoItem>
            ))}
        </div>
    );
};
export default TodoItems;
