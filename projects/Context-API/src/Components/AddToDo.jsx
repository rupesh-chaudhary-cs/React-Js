import { useContext } from "react";
import css from "./AddToDo.module.css";
import TODOITEMSCONTEXT from "../Store/ITEMS";
// import { BiMessageAdd } from "react-icons/bi";

function AddToDo({handleronClick,handleronInput,handleronDate,newName,newDate}) {

    const {onClick}=useContext(TODOITEMSCONTEXT);
    
    return (
        <div className="container text-center">
            <div className={`${css["kg-margin"]} row`}>
                <div className="col-6">
                    <input 
                    onChange={handleronInput}
                    value={newName}
                     className={`${css.input}`} type="text" placeholder="Enter Todo here" />
                </div>
                <div className="col-4">
                    <input type="date"
                    value={newDate}
                    onChange={handleronDate}
                    />
                </div>
                <div className="col-2">
                    <button
                    onClick={onClick}
                    
                    type="button" className={`${css.button} btn btn-success `}>
                        {/* <BiMessageAdd /> */}
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddToDo;
