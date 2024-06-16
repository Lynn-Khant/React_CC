import {Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Create from '../pages/Create';
import Search from '../pages/Search';
import DetailPage from '../pages/DetailPage';
import Register from '../pages/Register';
import Login from '../pages/Login';


import { AuthContext } from "../useContext/AuthContext";
import { useContext } from 'react';
import BookForm from '../components/BookForm';

export default function index() {
    let {  user,authReady } = useContext(AuthContext);

    const isAuthenticated = Boolean(user);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: isAuthenticated ? <Home /> : <Navigate to="/login" />
                },
                {
                    path: "/books/:id",
                    element: isAuthenticated ? <DetailPage /> : <Navigate to="/login" />
                },
                {
                    path: "/create",
                    element: isAuthenticated ? <BookForm /> : <Navigate to="/login" />
                },
                {
                    path: "/edit/:id",
                    element: isAuthenticated ? <BookForm /> : <Navigate to="/login" />
                },
                {
                    path: "/search",
                    element: isAuthenticated ? <Search /> : <Navigate to="/login" />
                },
                {
                    path: "/register",
                    element: !isAuthenticated ? <Register /> : <Navigate to="/" />
                },
                {
                    path: "/login",
                    element: !isAuthenticated ? <Login /> : <Navigate to="/" />
                },
            ]
        },
    ]);

    return (
        authReady && <RouterProvider router={router} />
    )
}

