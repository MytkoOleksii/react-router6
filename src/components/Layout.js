import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";

function Layout(props) {
    return (
        <>
            {/*<header className="App-header">
                <Link to='/'>Home</Link>
                <Link to={'/posts'}>Blog</Link>
                <Link to={'/about'}>About</Link>
            </header>*/}
            <header className="App-header">
                <NavLink to='/'>Home</NavLink>
                <NavLink to={'/posts'}>Blog</NavLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer> Footer 2023</footer>
        </>

    );
}

export default Layout;