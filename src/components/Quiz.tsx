import {decode} from 'html-entities';
import SingleChoice from './SingleChoice';
import { useState } from 'react';

export default function Quiz(props:{
   title : string;
   correct_answer: string;
   incorrect_answers: string[]
  }) {

  const answersArray = props.incorrect_answers;
  answersArray.splice((answersArray.length+1) * Math.random(),0, props.correct_answer)

  const [userAnserws, setUserAnsewer] = useState<string[]>([])

  return (
    <div className='quiz'>
        <h3 className='quiz--question'>
          {decode(props.title)}
        </h3>
        <div className='quiz--answers'>
          <SingleChoice 
          answersArray = {answersArray}/>
        </div>
        <hr />
    </div>
  )
}
