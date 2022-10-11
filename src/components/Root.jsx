import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export const QuizDataContext = createContext([])
const Root = () => {
    const quizData = useLoaderData();

    return (
        <QuizDataContext.Provider value={quizData}>
            <Header />
            <Outlet />
            <Footer />
        </QuizDataContext.Provider>
    );
};

export default Root;
