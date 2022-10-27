import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOut/Main/Main';
import Blogs from '../Pages/Blogs/Blogs';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import FAQ from '../Pages/FAQ/FAQ';

import Home from '../Pages/Home/Home';
import MainLogin from '../Pages/MainLogin/MainLogin';
import NoPage from '../Pages/NoPage/NoPage';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        loader:()=>fetch(`https://a-10-server.vercel.app/courses`),
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch(`https://a-10-server.vercel.app/courses`),
            },
            {
                path:'/course/:id',
                loader:({params})=>fetch(`https://a-10-server.vercel.app/courses/${params.id}`),
                element:<CourseDetails></CourseDetails>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/mainLogin',
                element:<MainLogin></MainLogin>
            },
            {
                path:'/premium',
                element:<Home></Home>
            },
        ]
    },
    {
        path:'*',
        element:<NoPage></NoPage>
    }
])