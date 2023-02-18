import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOut/Main/Main';
import Blogs from '../Pages/Blogs/Blogs';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import AllCourses from '../Pages/Courses/AllCourses';
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
        loader: () => fetch(`https://a-10-server-jfjubaer.vercel.app/courses`),
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://a-10-server-jfjubaer.vercel.app/courses`),
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://a-10-server-jfjubaer.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/courses',
                element: <AllCourses></AllCourses>
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
                loader: ({ params }) => fetch(`https://a-10-server-jfjubaer.vercel.app/courses/${params.id}`),
                element: <Private><Premium></Premium></Private>
            },
        ]
    },
    {
        path: '*',
        element: <NoPage></NoPage>
    }
])