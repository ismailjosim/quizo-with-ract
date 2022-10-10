import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const QuestionBox = ({ questionItems }) => {
    const { options, id, question, correctAnswer } = questionItems;

    const handleOption = (option) => {
        const userAns = option;
        if (userAns === correctAnswer) {
            alert("Correct Ans!")
        } else {
            alert("Wrong!")
        }

    }


    return (
        <div className='mb-5 shadow-md bg-slate-100 px-3 py-5 rounded-md'>

            <div>
                <p className="inline-block px-3 py-px mb-4 font-semibold tracking-wider text-teal-500 uppercase rounded-full bg-teal-accent-400">
                    {question}
                </p>
            </div>

            {
                options.map((option, index) => <Item key={index} option={option} handleOption={handleOption}></Item>)
            }


        </div>
    );
};

export default QuestionBox;
