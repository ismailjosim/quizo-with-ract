import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import QuizBox from './QuizBox';
import { QuizDataContext } from './Root';

const Home = () => {
    const allQuiz = useContext(QuizDataContext);
    const quiz = useLoaderData();

    return (
        <div className='w-11/12 mx-auto'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <a href="/" className="mb-6 sm:mx-auto">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </a>
                        <div className="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12 text-center">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto ">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span className="relative">Test</span>
                                </span>{' '}
                                Your Programming Skill By Simply Answering Questions.
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler
                            </p>
                        </div>
                        <div className='mx-auto'>
                            <Link
                                to="/"
                                className="btn btn-info text-white"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-center text-2xl font-bold'>Practice Your Skill</h2>
            <p className='text-center my-2 px-2'>Best practices are those practices that generally produce the best results or minimize risk.</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-5 my-10">
                {
                    allQuiz.data.map(quiz => <QuizBox key={quiz.id} quiz={quiz} />)

                }
            </div>
        </div>
    );
};

export default Home;
