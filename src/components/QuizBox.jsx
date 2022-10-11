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
                    "inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 btn btn-info text-white"
                >
                    Start Now
                </Link>
            </div>
        </div>
    );
};

export default QuizBox;
