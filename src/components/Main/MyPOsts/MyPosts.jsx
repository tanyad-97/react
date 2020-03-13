import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <textarea name="" id="" cols="100" rows="5"></textarea>
            <button>отправить</button>
            <div className={s.posts}>
                <Post message={'hi how are you'} countLike={'14'}/>
                <Post message={'hey lol'} countLike={'5'}/>
                <Post message={'kek cheburek'} countLike={'10'}/>
                <Post message={'Vsem Hi'} countLike={'105'}/>
            </div>
        </div>
    );
}

export default MyPosts;