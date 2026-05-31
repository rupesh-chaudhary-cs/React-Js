import { createContext, useReducer } from "react";


export const PostList33= createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}
});

const postListReducer=(currItems,action)=>{
    let finalPostList=currItems;
    if(action.type=="ADD_Item"){
        
    }else if(action.type=="DELETE_Item"){

    }
    return finalPostList;
}


const default_post_list=[
        {
            id:'1',
            title:"Going to Delhi",
            body:"Hi Friends,I am going to Delhi for my vacations.Hope to enjoy a lot .Peace out",
            reaction:2,
            userId:"user-9",
            tag:["vactaion","Mumbai","Enjoying "],

        },
        {
           id:'2',
            title:"Paas BTECH",
            body:"Finally passed the four year of my B.tech Course.",
            reaction:30,
            userId:"user-ID",
            tag:["Graduating","Unbelievable"],
        },]
const PostListProvider=({children})=>{

    const[postList,dispatchPostList]=useReducer(postListReducer,default_post_list);

    const addPost=()=>{

    }

    const deletePost=()=>{
          
    }


    return <PostList33.Provider value={{
        postList,
        addPost,
        deletePost,

    }}>
        {children}
    </PostList33.Provider>
    
    // const default_post_list=[
    //     {
    //         id:'1',
    //         title:"Going to Delhi",
    //         body:"Hi Friends,I am going to Delhi for my vacations.Hope to enjoy a lot .Peace out",
    //         reaction:2,
    //         userId:"user-9",
    //         tag:["vactaion","Mumbai","Enjoying "],

    //     },
    //     {
    //        id:'2',
    //         title:"Paas BTECH",
    //         body:"Finally passed the four year of my B.tech Course.",
    //         reaction:30,
    //         userId:"user-ID",
    //         tag:["Graduating","Unbelievable"],
    //     },

    // ]


}
export default PostListProvider;