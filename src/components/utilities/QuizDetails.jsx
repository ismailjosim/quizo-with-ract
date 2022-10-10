import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionBox from '../QuestionBox';

const QuizDetails = () => {
    const allData = useLoaderData();
    const questions = allData.data.questions;


    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='font-semibold text-2xl text-center'>All questions : {questions.length}</h2>

            {
                questions.map(questionItems => <QuestionBox key={questionItems.id} questionItems={questionItems} />)
            }
        </div>
    );
};

export default QuizDetails;
