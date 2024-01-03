import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./post/Post";


const MyPosts = (props: any) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                < Post message='Hi, How are you?' />
                < Post message='I am  fine'/>
            </div>
        </div>
    );
};

export default MyPosts;