import React, { useContext } from 'react';
import { QuizDataContext } from './Root';


const Statistics = () => {
    const allQuiz = useContext(QuizDataContext);
    const quizData = allQuiz.data;
    console.log(quizData);


    return (
        <div>
            <h3>Statistics</h3>
        </div>
    );
};

export default Statistics;
