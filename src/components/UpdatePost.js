import React from 'react';
import {Form} from "react-router-dom";

function UpdatePost({id, title, body, userId, submitting}) {
    return (
        <Form method={'post'} action={`/posts/${id}/edit`}>
            <label>
                Title:
                <input type={'text'} name={'title'} defaultValue={title}/>
            </label>
            <label>
                Body:
                <input type={'text'} name={'body'} defaultValue={body}/>
            </label>
            <input type={'hidden'} name={'userId'} value={userId}/>
            <input type={'hidden'} name={'id'} value={id}/>
            <input type={'submit'} disabled={submitting} value={'Update post'}/>
        </Form>
    );
}

export default UpdatePost;