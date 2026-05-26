function Hello(){
    let myFirstName="Rupesh";
    let phoneNumber=3794397938
    let fullData=()=>{
        return "Rupesh Kumar Chaudhary";
    }
    return <p> 
        I am {fullData()} and my phonenumber is {phoneNumber}
    </p>
    
}
export default Hello;