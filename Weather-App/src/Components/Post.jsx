const Post=({initialPost})=>{
    
    return <div>
        <h1>Name:{initialPost[0].name}</h1>
        <h2>tempearature:{initialPost[0].temperature}</h2>
    </div>
}
export default Post;