import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import useAuth from "../hook/useAuth";

function Login(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const {singIn} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handlerSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value

        singIn(user, () => navigate(fromPage, {replace: true})) // регистрирует юзера и возвращает на страницу авторизации
    }

    return (
        <div>
            <h1>Login </h1>
            <form onSubmit={handlerSubmit}>
                <label>
                    Name: <input name={'username'}/>
                </label>
                <button type={'submit'}>Login</button>
            </form>
          Звідки ми пришли:  {fromPage}
        </div>
    );
}

export default Login;