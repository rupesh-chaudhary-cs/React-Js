const ErrorMessage=({foodItems})=>{
    // let foodItems=['Dal','Green Vegetables','Rice','Milk','Salad',"Ghee"];
    return <>{foodItems.length == 0 && <h3>I am still Hungry</h3>}</>;

}
export default ErrorMessage;