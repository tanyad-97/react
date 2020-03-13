import React from "react";
import s from './Main.module.css';
import MyPosts from "./MyPOsts/MyPosts";

const Main=()=> {
    return (
        <div className={s.main}>
            <div>
                <img src="https://wallbox.ru/wallpapers/main/201138/liguriyskoe-more-bereg-volny-e7698f3.jpg" alt=""/>
            </div>
            <MyPosts/>
        </div>
    );
}

export default Main;