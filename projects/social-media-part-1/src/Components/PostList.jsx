import { useContext } from "react";
import Post from "./Post";
import { PostList33 } from "../Store/Post-list-store";
const PostList=()=>{

    let {postList}=useContext(PostList33)
    console.log(postList);
    return <>
        {postList.map((val)=>(
            
            <Post></Post>
            
        ))}

    </>
}
export default PostList;