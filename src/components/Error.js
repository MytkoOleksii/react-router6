import React from 'react';
import {isRouteErrorResponse, useRouteError} from "react-router-dom";

function Error() {
    const error = useRouteError()// Получаем объект ошибки
    if(isRouteErrorResponse(error)) {
        return (
            <div>
                {/*   <h1>{error.status}</h1>
            <h3>{error.statusText || 'Something wrong'}</h3>*/}
                <h1>{error.status}</h1>
                <h3>{error.data.message || 'Something wrong (data)'}</h3>
                <h3>{error.data.reason || 'Reason (data)'}</h3>
            </div>
        )
    }
    throw error
}

export default Error;