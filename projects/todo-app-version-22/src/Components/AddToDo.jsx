import css from "./AddToDo.module.css";
// import { BiMessageAdd } from "react-icons/bi";

function AddToDo({handleronClick,newName,newDate}) {
    return (
        <form className="container text-center"
        onSubmit={handleronClick}
        
        
        >
            <div className={`${css["kg-margin"]} row`}>
                <div className="col-6">
                    <input 
                    ref={newName}
                     className={`${css.input}`} type="text" placeholder="Enter Todo here" />
                </div>
                <div className="col-4">
                    <input type="date"
                    ref={newDate}
            
                    />
                </div>
                <div className="col-2">
                    <button
                    // onClick={handleronClick}
                    
                    type="submit" className={`${css.button} btn btn-success `}>
                        {/* <BiMessageAdd /> */}
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddToDo;
