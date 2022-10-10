import React from 'react';

const Item = ({ option }) => {

    return (

        <div className="form-control">
            <label className=" flex items-center gap-3 my-3 cursor-pointer">
                <input type="radio" name="radio-6" className="radio checked:bg-red-500" checked />
                <span className="label-text active:text-red-500">{option}</span>
            </label>
        </div>

    );
};

export default Item;

