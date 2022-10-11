import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import Item from './Item';

const QuestionBox = ({ questionItems }) => {
    const { options, id, question, correctAnswer } = questionItems;

    const handleOption = (option) => {
        const userAns = option;
        if (userAns === correctAnswer) {
            toast.success("Correct Answer 🎉🎉", { autoClose: 500 });
        } else {
            toast.error("Incorrect Answer 😢😢", { autoClose: 500 });
        }
    }

    const handleRightAnswer = () => {
        Swal.fire(`${ correctAnswer }`);
    }



    return (
        <div className='mb-5 shadow-md bg-slate-100 px-3 py-5 rounded-md'>
            <div className='flex align-middle justify-between'>
                <h3 className="font-semibold tracking-wider text-teal-500 uppercase rounded-full bg-teal-accent-400">Question: {question.slice(3, question.length - 4)}
                </h3>
                <button onClick={() => handleRightAnswer(correctAnswer)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                </button>
            </div>

            {
                options.map((option, index) => <Item key={index} option={option} handleOption={handleOption}></Item>)
            }
        </div>
    );
};

export default QuestionBox;
