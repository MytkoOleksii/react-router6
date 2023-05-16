import React from 'react';
import {useParams} from "react-router-dom";

function EditPost(props) {
    const {id} = useParams()
    return (
        <div>

           <h1> Edit post: {id}</h1>
        </div>
    );
}

export default EditPost;
