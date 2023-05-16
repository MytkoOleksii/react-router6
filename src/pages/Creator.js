import React from 'react';
import useAuth from "../hook/useAuth";
import {useNavigate} from "react-router-dom";

function Creator(props) {
    const  {singOut} = useAuth()
    const navigate = useNavigate()
    return (
        <div>
            <h1> Create post</h1>
            <button onClick={() => singOut(() => navigate('/' , {replace: true}))}>Login Out</button>
        </div>
    );
}

export default Creator;

