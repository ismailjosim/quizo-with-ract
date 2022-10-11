import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionBox from './QuestionBox';

const QuizDetails = () => {
    const allData = useLoaderData();
    const data = allData.data;
    const { questions, name, logo } = data;



    return (
        <div className='w-11/12 mx-auto'>

            <div className="flex justify-around items-center bg-slate-200 rounded-md border-2 border-cyan-500 my-5">
                <div className='w-1/4'>
                    <img src={logo} alt="quizTopic" />
                </div>

                <h2 className='font-semibold text-xl'>Topic : {allData.data.name}</h2>
                <h2 className='font-semibold text-xl'>Total questions : {questions.length}</h2>
            </div>

            {
                questions.map(questionItems => <QuestionBox key={questionItems.id} questionItems={questionItems} />)
            }
        </div >
    );
};

export default QuizDetails;
