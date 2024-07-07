import React, { useState } from 'react'
import {decode} from 'html-entities';

export default function SingleChoice(props:{
    answersArray: string[];
}) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value)
    };

    return(
        <form className='radio-from'>
            {props.answersArray.map((item:string) => {
                return(
                    <div className="radio-container">
                        <input
                        className='radio-input'
                        id={item}
                        key = {item}
                        type='radio'
                        value={item}
                        checked={selectedOption === item}
                        onChange={handleChange}
                        />
                        <label htmlFor={item} className='radio-label'>
                            {decode(item)}
                        </label>
                    </div>
                )})}
        </form>
    );
}