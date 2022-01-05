import React from "react";
import MainInfo from "./MyPosts/MainInfo/MainInfo";
import MyPost from "./MyPosts/MyPost/MyPost";
import PostCreator from "./MyPosts/PostCreator/PostCreator";


const ProFile = ()=>{
    return <div>
                <MainInfo/>
                <PostCreator/>
                <MyPost/>
                <MyPost messandge='Hi, how are you?'/>  
                <MyPost messandge='I love games'/>  
                <MyPost messandge='LOOOL'/>      
            </div>
    }
export default ProFile;