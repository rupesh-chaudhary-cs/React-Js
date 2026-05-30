import { useContext } from "react"
import { createContext } from "react"

const TODOITEMSCONTEXT=createContext({
    todoItems:[],
    onClick:()=>{},
    onDeletenow:()=>{},
});

export default TODOITEMSCONTEXT;