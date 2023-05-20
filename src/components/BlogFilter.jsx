import React, {useState} from 'react';

function BlogFilter({setSearchParams,latest,postQuery}) {
    const [search, setSearch] = useState(postQuery); // Выдаст значение post=...
    const [checked, setChecked] = useState(latest)


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const query = form.search.value// То что введено в поиске

        const isLatest = form.latest.checked

        const params = {};

        if(query.length) params.post = query;
        if(isLatest) params.latest = true;

      setSearchParams(params)// Записывает
    }
    return (
        <form autoComplete={'off'} onSubmit={handleSubmit}>
            <input type={'search'} name={'search'} value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <label style={{padding: '0 1rem'}}>
                <input type={'checkbox'} name={'latest'} checked={checked} onChange={ e => setChecked(e.target.checked)}/> New only
            </label>
            <input type={'submit'} value={'Search'}/>
        </form>
    );
}

export default BlogFilter;