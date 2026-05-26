import css from "./AddToDo.module.css";
function AddToDo() {
    return (
        <div className="container text-center">
            <div className={`${css["kg-margin"]} row`}>
                <div className="col-6">
                    <input className={`${css.input}`} type="text" placeholder="Enter Todo here" />
                </div>
                <div className="col-4">
                    <input type="date" />
                </div>
                <div className="col-2">
                    <button type="button" className={`${css.button} btn btn-success `}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddToDo;
