import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";

function Single(props) {
    const {id}= useParams()
    const navigate = useNavigate()
    const  goBack = () => navigate(-1)// -1 вернутся на одну страницу назад
    const goHome = () => navigate('/', {replace:true})
    const[post, setPost] = useState(null)
    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    },[id]);
    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Go home</button>

            {post && (
                <>
                <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit this post </Link>
                </>
            )}
        </div>
    );
}

export default Single;