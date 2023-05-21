import React from 'react';
import useAuth from "../hook/useAuth";
import {redirect, useNavigate, useNavigation} from "react-router-dom";
import NewPost from "../components/NewPost";

function CreatorPost() {
    const  {singOut} = useAuth()
    const navigate = useNavigate()
   const navigation = useNavigation() // Возвращает в виде обекта idle- ничего не происходит, loading- загружается новый роутинг, submiting- сабмитится форма.
    return (
        <div>
            <h1> Create post</h1>
            <NewPost submitting={navigation.state === 'submitting'}/>
            <button onClick={() => singOut(() => navigate('/' , {replace: true}))}>Login Out</button>
        </div>
    );
}


const createPost =  async ({title, body, userId}) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({title, body, userId})
        })
    return await response.json()
};


export const createPostAction = async  ({request}) => {
    const formData = await request.formData();
    const newPost = {
        title: formData.get('title'),
        body: formData.get('body'),
        userId: formData.get('userId'),
    }
    const post = await createPost(newPost)
    return redirect('/posts/'+post.id)
};

export default CreatorPost;

