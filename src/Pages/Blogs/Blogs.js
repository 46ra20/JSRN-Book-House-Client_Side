import React from 'react';

const Blogs = () => {
    const questionBank = [
        {
            "question": " What are the different ways to manage a state in a React application?", "answer": "Local (UI) state – Local state is data we manage in one or another component.Global (UI) state – Global state is data we manage across multiple components.Server state – Data that comes from an external server that must be integrated with our UI state.URL state – Data that exists on our URLs, including the pathname and query parameters."
        },
        {
            "question": "How does prototypical inheritance work?",
            "answer": "JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values)."
        },
        {
            "question": " What is a unit test? Why should we write unit tests?",
            "answer": "Unit testing is important to verify the behavior of the smallest units of code in your application. It helps improve the quality of your code and reduces the amount of time and money you spend on bug fixing. Moreover, unit testing helps you find bugs early on in the development life cycle and increases your confidence in the code. This post we’ll show you how to get started with Node.js unit testing in practice, with examples. Think of this post as a “hello world” for unit testing in Node.js."
        },
        {
            "question": "React vs. Angular vs. Vue?",
            "answer": "There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences."
        }
    ]
    return (
        <div className='container mx-auto'>
            {
                questionBank.map((question,i) =>
                    <div className='border rounded-xl shadow lg:w-1/2 mx-3 my-5 px-3 py-4 lg:mx-auto' key={i}>
                        <h2 className='text-2xl font-semibold'>{question.question}</h2>
                        <hr className='my-2' />
                        <p>{question.answer}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Blogs;