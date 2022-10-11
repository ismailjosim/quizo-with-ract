import React, { useContext } from 'react';
import { QuizDataContext } from './Root';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const allQuiz = useContext(QuizDataContext);
    const { data } = allQuiz;
    return (
        <div>
            <div className='my-10 lg:mx-[20%]  bg-gray-200 py-10 rounded-md'>
                <h3 className='font-semibold text-2xl text-center'>Quiz Module Chart</h3>
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={data}>
                        <Bar dataKey="total" fill="#22b8cf" className='bg-cy' />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default Statistics;


