import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOut/Main/Main';

import Home from '../Pages/Home/Home';
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
                path:'/course',
                element:<></>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
        ]
    },
    {
        path:'*',
        element:<NoPage></NoPage>
    }
])