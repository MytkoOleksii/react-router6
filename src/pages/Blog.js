import React, {useEffect, useState} from 'react';
import {Link, useLocation, useSearchParams} from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

function Blog(props) {
    const[posts, setPosts] = useState([]);
    const[searchParams, setSearchParams] = useSearchParams();


    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    },[]);
//------------------- Поиск  ------------------------//
    const postQuery = searchParams.get('post') || ''; // Выдаст значение post=...

    //------------------------------------------------------//
    //---------------------  -------------------------------//
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1; // ето id
    //-------------------------------------------------------//
    return (
        <div>
            <h1>Blog</h1>
           <BlogFilter setSearchParams={setSearchParams} latest={latest} postQuery={postQuery} />
            <Link to={'/posts/new'}>Add new post</Link>
            {
                // filter оставляет то что введено в поиск includes проверяет есть ли такое значение
                // У них post.id больше или равен startsFrom
                posts.filter(post => post.title.includes(postQuery) && post.id >= startsFrom).map( post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li style={{textAlign: 'left', paddingLeft: 15}}>{post.title}</li>
                    </Link>

                ))
            }
        </div>
    );
}

export default Blog;