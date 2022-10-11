import React from 'react';
import { Link } from 'react-router-dom';

const QuizBox = ({ quiz }) => {
    const { id, name, logo, total } = quiz;

    return (
        <div className="overflow-hidden transition-shadow duration-300 border-2 border-transparent rounded-md">
            <img
                src={logo}
                className="object-cover w-full h-64 bg-cyan-700"
                alt=""
            />
            <div className="p-5 border-2 border-t-0  border-cyan-500 rounded-t-none rounded-md">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                        href="/"
                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                        aria-label="Category"
                        title="traveling"
                    >
                        Total Quiz
                    </a>
                    <span className="text-gray-600">— {total}</span>
                </p>
                <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    {name}
                </a>
                <p className="mb-3 text-gray-700 text-justify">
                    Programming is a skill best acquired by practice and example rather than from books. Fix the cause, not the symptom. Make it work, make it right, make it fast.
                </p>
                <Link
                    to={`/home/${ id }`}

                    className=
                    "font-semibold rounded-md btn btn-info text-white hover:scale-105 ease-in-out duration-300"
                >
                    Start Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>

                </Link>
            </div>
        </div>
    );
};

export default QuizBox;
