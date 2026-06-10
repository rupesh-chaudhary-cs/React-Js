const ErrorMessage=({initialPost})=>{
    return <>
        {initialPost.length===0 && <h1>sorry ,there is no post !</h1>}
    </>
}

export default ErrorMessage;