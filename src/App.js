import logo from './logo.svg';
import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Notfound from "./pages/Notfound";
import Layout from "./components/Layout";
import Single from "./pages/Single";
import Creator from "./pages/Creator";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";


function App() {
    return (
        <AuthProvider>
        <div className="App">

            <div>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/about-us'
                               element={<Navigate to={'/about'} replace/>}/> {/*// Navigate -переадресация */}
                        <Route path={'/posts'} element={<Blog/>}/>
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
}

export default App;
