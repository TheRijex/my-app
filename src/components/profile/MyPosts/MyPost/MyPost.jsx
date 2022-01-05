import React from "react";
import classes from'./MyPost.module.css';

const MyPost = (props)=>{
    return <div className={classes.mainContent}> 
                    <div className="posts">
                        <div className={classes.item}>
                            {props.messandge}
                        </div>
                    </div>
            </div>
    }
export default MyPost;