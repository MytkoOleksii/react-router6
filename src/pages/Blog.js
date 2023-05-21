import React,{ Suspense }  from 'react';
import {Await, defer, Link, useLoaderData, useLocation, useSearchParams} from "react-router-dom";
import BlogFilter from "../components/BlogFilter";


async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')// Получает запрос
    return response.json() // Разбирает данные
};

export const blogLoader = async () => {
    return defer({// Есть возможность ожидать пока какая то часть данных дозагрузиться/будет получена
        posts: getPosts()
    })
};


function Blog(props) {

    const {posts} = useLoaderData()

    const [searchParams, setSearchParams] = useSearchParams();
//---------------- варіант 1  ---------------------------//
    //   const[posts, setPosts] = useState([]); // Варіант 1
    /*    useEffect( ()=>{ // Варіант 1
            fetch('https://jsonplaceholder.typicode.com/posts')// Получеат запрос
                .then(response => response.json()) // Разбирает данные
                .then(data => setPosts(data)) // Добавляет в стейт
        },[]);*/
//----------------------------------------------------------------//
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
            <BlogFilter setSearchParams={setSearchParams} latest={latest} postQuery={postQuery}/>
            <Link to={'/posts/new'}>Add new post</Link>
            <Suspense fallback={<h2>Loading...</h2>}> {/* // Показывает пока идет загрузка. Показывать все вокруг суспенса пока идет загрузка*/}
                {/*// Что показывать когда загрузится */}
                <Await resolve={posts} >
                    {
                        (posts) => ( <>
                            {
                                // filter оставляет то что введено в поиск includes проверяет есть ли такое значение
                                // У них post.id больше или равен startsFrom
                                posts.filter(post => post.title.includes(postQuery) && post.id >= startsFrom).map(post => (
                                    <Link key={post.id} to={`/posts/${post.id}`}>
                                        <li style={{textAlign: 'left', paddingLeft: 15}}>{post.title}</li>
                                    </Link>

                                ))
                            }
                        </>)
                    }
                </Await>
            </Suspense>

        </div>
    );
}

export default Blog;