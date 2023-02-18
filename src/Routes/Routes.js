import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOut/Main/Main';
import Blogs from '../Pages/Blogs/Blogs';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import FAQ from '../Pages/FAQ/FAQ';

import Home from '../Pages/Home/Home';
import MainLogin from '../Pages/MainLogin/MainLogin';
import Register from '../Pages/MainLogin/Register';
import Terms from '../Pages/MainLogin/terms';
import NoPage from '../Pages/NoPage/NoPage';
import Premium from '../Pages/Premium/Premium';
import Private from './Private';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch(`http://localhost:4000/courses`),
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:4000/courses`),
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`http://localhost:4000/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/mainLogin',
                element: <MainLogin></MainLogin>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/premium/:id',
                loader: ({ params }) => fetch(`http://localhost:4000/courses/${params.id}`),
                element: <Private><Premium></Premium></Private>
            },
        ]
    },
    {
        path: '*',
        element: <NoPage></NoPage>
    }
])