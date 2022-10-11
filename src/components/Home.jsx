import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import QuizBox from './QuizBox';
import { QuizDataContext } from './Root';


const Home = () => {
    const allQuiz = useContext(QuizDataContext);

    return (
        <div>
            <div className="relative">
                <img
                    src="https://canopylab.com/wp-content/uploads/2020/05/Working-with-adaptive-quizzes-A-beginners-guide.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40 text-center">
                        <div className="w-3/4 mx-auto">
                            <h2 className="mb-6 font-sans text-2xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Test Your Programming Skill By Simply Answering Questions.
                            </h2>
                            <p className="text-base text-white md:text-lg my-3">
                                “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler
                            </p>
                            <Link
                                to="/"
                                className="btn btn-lg btn-info text-white rounded-md hover:scale-10 ease-in-out duration-300"
                            >
                                Get started
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 ml-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-10'>
                <h2 className='text-center text-2xl font-bold'>Practice Your Skill</h2>
                <p className='text-center my-2 px-2'>Best practices are those practices that generally produce the best results or minimize risk.</p>
                <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-5 my-10">
                    {
                        allQuiz.data.map(quiz => <QuizBox key={quiz.id} quiz={quiz} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
