import React from "react";
import s from './Main.module.css';

const Main=()=> {
    return (
        <div className={s.main}>
            <div>
                <img src="https://wallbox.ru/wallpapers/main/201138/liguriyskoe-more-bereg-volny-e7698f3.jpg" alt=""/>
            </div>
            <div>
                <div className={s.item}>
                    <a>ava</a>
                </div>
                <p>my post</p>
                <p>new pot</p>
                <p>post 1</p>
                <p>post 2</p>
            </div>
        </div>
    );
}

export default Main;