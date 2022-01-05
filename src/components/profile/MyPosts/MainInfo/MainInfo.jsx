import React from "react";
import classes from'./MainInfo.module.css';

const MainInfo = ()=>{
    return <div>
    <div>
        <img src='https://mocah.org/uploads/posts/4505541-abstract-lines-colorful-matrix.jpg' className={classes.bg} alt='bg'/>
    </div>
    <div className={classes.info}>
        <div>
            <img src='https://avatars.mds.yandex.net/i?id=784462e2ea0cc7eca2feca6d7c86e029-5275133-images-thumbs&n=13' className={classes.avatar} alt='Ava'/>
            <p>Yan Lazarovski</p>
            <p>Образование: БГУИР</p>
            <p>Возраст: 21 год</p>
            <p></p>

        </div>
    </div>
</div>
    }
export default MainInfo;
