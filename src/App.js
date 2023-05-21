import './App.css';
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog, {blogLoader} from "./pages/Blog";
import Notfound from "./pages/Notfound";
import Layout from "./components/Layout";
import Single, {postLoader} from "./pages/Single";
import Creator from "./pages/Creator";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";
import React from "react";

const router =  createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about/*' element={<About/>}>
            <Route path={'contacts'} element={<p>Our contacts</p>}/> {/* // Вложенніе роути*/}
            <Route path={'team'} element={<p>Our team</p>}/>
        </Route>
        <Route path='/about-us' element={<Navigate to={'/about'} replace/>}/> {/*// Navigate -переадресация */}
        <Route path={'/posts'} element={<Blog/>} loader={blogLoader}/>
        <Route path={'/posts/:id'} element={<Single/>} loader={postLoader}/>
        <Route path={'/posts/:id/edit'} element={<EditPost/>}/>
        <Route path={'/posts/new'} element={
            <RequireAuth>
                <Creator/>
            </RequireAuth>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path={'*'} element={<Notfound/>}/>
    </Route>
))
function App() {
    return (
        <AuthProvider>
            <div className="App">
                <RouterProvider router={router} />
                <div>
                    <p> App. Get started with React-Router 6 . </p>
                </div>
            </div>
        </AuthProvider>
    );
}

//------------------------------- OLD --------------------------//
/*function App() {
    return (
        <AuthProvider>
            <div className="App">

                <div>
                    <Routes>
                        <Route path={'/'} element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path='/about/!*' element={<About/>}>
                               {/!* // Вложенніе роути*!/}
                                <Route path={'contacts'} element={<p>Our contacts</p>}/>
                                <Route path={'team'} element={<p>Our team</p>}/>
                            </Route>
                            <Route path='/about-us'
                                   element={<Navigate to={'/about'} replace/>}/> {/!*!// Navigate -переадресация *!/}
                            <Route path={'/posts'} element={<Blog/>} />
                            <Route path={'/posts/:id'} element={<Single/>}/>
                            <Route path={'/posts/:id/edit'} element={<EditPost/>}/>
                            <Route path={'/posts/new'} element={
                                <RequireAuth>
                                    <Creator/>
                                </RequireAuth>
                            }/>
                            <Route path='/login' element={<Login/>}/>

                            <Route path={'*'} element={<Notfound/>}/>
                        </Route>
                    </Routes>
                    <p> App. Get started with React-Router 6 . </p>
                </div>
            </div>
        </AuthProvider>
    );
}*/

export default App;
