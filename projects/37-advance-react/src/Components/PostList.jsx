import { useContext } from "react";
import Post from "./Post";
import { PostList33 } from "../Store/Post-list-store";
import ErrorMessage from "./ErrorMessage";
const PostList=()=>{
    let {postList,addInitialPost}=useContext(PostList33)
    console.log(postList);
    const onclickFetch=()=>{
        console.log("button is clicked;");
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data=> {
            console.log(data.posts)
            addInitialPost(data.posts);
        });
        
    }

    // let {postList}=useContext(PostList33)
    // console.log(postList);
    return <>
        {postList.length==0 && <ErrorMessage handleronClick={onclickFetch}></ErrorMessage>}
        {postList.map((val)=>(
            
            <Post key={val["id"]}post={val}></Post>
            
        ))}

    </>
}
export default PostList;