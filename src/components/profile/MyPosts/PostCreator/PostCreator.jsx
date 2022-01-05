import React from "react";
import classes from'./PostCreator.module.css';

const PostCreator = ()=>{
    return <div className={classes.mainContent}>
                <div className={classes.mainContentPosts}>
                    My Posts
                    <div>
                        New post
                    </div>
                    <div>
                        <textarea name="Post" id="" cols="30" rows="8"></textarea>
                        <br />
                        <button>Add Post</button>
                    </div>
                </div>
            </div>
    }
export default PostCreator;