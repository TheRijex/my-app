import React from "react";
import Sty from'./header.module.css';

const Header = ()=>{
    return <header className={Sty.header}>
            <div>
                <img src="####https://www.pikpng.com/pngl/m/57-577367_tiger-png-logo-free-tiger-logo-png-clipart.png" alt="LOGO"></img>
            </div>
            <div className={Sty.hederWords}>
                Fox Lines
            </div> 
           </header>
}
export default Header;