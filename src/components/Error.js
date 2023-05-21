import React from 'react';
import {useRouteError} from "react-router-dom";

function Error(props) {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>{error.status}</h1>
            <h3>{error.statusText || 'Something wrong'}</h3>
        </div>
    );
}

export default Error;