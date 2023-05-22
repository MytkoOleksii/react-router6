import React from 'react';
import {Form} from "react-router-dom";
// Action - куда-то что-то отправлять
// Нужно создать екшен и передать определенному роутеру
// request -  знает все об форме которая была отправлена
// Вызвать метод formData()
function NewPost({submitting}) {
    // Отправляем форму по адресу
    return (
        <Form action={'/posts/new'}  method='post'>
            <label>
                Title:
                <input type={'text'} name={'title'}/>
            </label>
            <label>
                Body:
                <input type={'text'} name={'body'}/>
            </label>
                <input type={'hidden'} name={'userId'} value={1}/>
            <input type={'submit'} value={'Add post'} disabled={submitting}/>
        </Form>
    );
}
export default NewPost;