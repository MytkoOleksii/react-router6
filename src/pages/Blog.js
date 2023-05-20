import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

function Blog(props) {
    const[posts, setPosts] = useState([])
    const location = useLocation()
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    },[]);
    return (

        <div>
            <h1>Blog</h1>
            <Link to={'/posts/new'}>Add new post</Link>
            {
                posts.map( post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li style={{textAlign: 'left', paddingLeft: 15}}>{post.title}</li>
                    </Link>

                ))
            }
        </div>
    );
}

export default Blog;