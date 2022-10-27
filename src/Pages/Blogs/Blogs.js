import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border border-2 m-5 p-5'>
                <h2>1. what is cors?</h2>
                <p>CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.This module supports validating the origin dynamically using a function provided to the origin option. This function will be passed a string that is the origin (or undefined if the request has no origin), and a callback with the signature callback(error, origin).
                    The origin argument to the callback can be any value allowed for the origin option of the middleware, except a function. See the configuration options section for more information on all the possible value types.
                    This function is designed to allow the dynamic loading of allowed origin(s) from a backing datasource, like a database.</p>
            </div>
            <div className='border border-2 m-5 p-5'>
                <h2>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
            <div className='border border-2 m-5 p-5'>
                <h2>3. How does the private route work?</h2>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div className='border border-2 m-5 p-5'>
                <h2>4. What is Node? How does Node work?</h2>
                <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
            </div>
        </div>
    );
};

export default Blogs;