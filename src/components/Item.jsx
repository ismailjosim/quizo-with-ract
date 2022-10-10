import React from 'react';

const Item = ({ option, handleOption }) => {

    return (
        <button onClick={() => handleOption(option)} className=" flex items-center gap-3 my-3 cursor-pointer hover:bg-slate-300">
            <input type="radio" name="radio-6" className="radio" />
            <span className="label-text active:text-red-500">{option}</span>
        </button>

    );
};

export default Item;

