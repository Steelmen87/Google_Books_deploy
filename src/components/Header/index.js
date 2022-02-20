import React from "react";
import style from "./style.module.css"

function Header() {
    return (
        <div className={style.jumbotron}>
            <div className={style.text}>
                <h1>Google Books Search</h1>
            </div>
        </div>
    );
}

export default Header;
