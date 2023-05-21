import React, {Suspense} from 'react';
import {Await, Link, useAsyncValue, useLoaderData, useNavigate} from "react-router-dom";

async  function getCoomentsByPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response.json()
}
const Comments = () => {
    const comments = useAsyncValue()
    return(
        <div>
            <h2>Comments</h2>
            {comments.map(comment => (
                <>
                    <h3 style={{textAlign: 'left', paddingLeft: 15}}>{comment.email}</h3>
                    <h4 style={{textAlign: 'left', paddingLeft: 15}}>{comment.name}</h4>
                    <p style={{textAlign: 'left', paddingLeft: 15}}>{comment.body}</p>
                </>
            ))}
        </div>
    )
}
//---------------------------------------------------------------------------------------------//
async function getPostById (id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return  response.json()
}
export const postLoader = async ({params}) => { // v2
    const  id = params.id;
    return {post: await getPostById(id), id, comments: getCoomentsByPost(id)}
};
const Post = () => {
    const post = useAsyncValue()
    return (
        <>
            <h1>{post.title}</h1>
            <p style={{textAlign: 'left', paddingLeft: 15}}>{post.body}</p>
        </>
    )
};
function Single() {
    const {post, id, comments} = useLoaderData()
    const navigate = useNavigate()
    const  goBack = () => navigate(-1)// -1 вернутся на одну страницу назад
    const goHome = () => navigate('/', {replace:true})
    //---------------------- V 1 -------------------------------------//
    //  const {id}= useParams()
    // const[post, setPost] = useState(null)
/*    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    },[id]);*/
    //-----------------------------------------------------------//
    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Go home</button>

            {/*{post && (
                <>*/}
               {/* <h1>{post.title}</h1>
                    <p>{post.body}</p>*/}
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={post} >
                    <Post/>
                </Await>
            </Suspense>
            <Suspense fallback={<h2>Comments is loading...</h2>}>
                <Await resolve={comments} >
                    <Comments/>
                </Await>
            </Suspense>

                    <Link to={`/posts/${id}/edit`}>Edit this post </Link>
           {/*     </>
            )}*/}
        </div>
    );
}

export default Single;