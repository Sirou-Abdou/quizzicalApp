import {decode} from 'html-entities';
import {nanoid} from 'nanoid'
import {q} from '../App'

export default function Quiz(props:{
  key : string;
  q : q;
  handleClickAnswer(id:string,answer:string): void;
  id: string
  }) 
  {
    let answers:string[] = props.q.answers

    function handleClick(answer:string) {
      if(props.q.checked){
        return
      }
      props.handleClickAnswer(props.id, answer)
    }

    const answersElement = answers.map( (answer:string) => {
      let id:string|undefined = undefined
      if(props.q.checked){
        if(props.q.correct === answer){
          id = 'correct'
        }
        else if (props.q.selected === answer){
          id = 'incorrect'
        }
        else{
          id = 'not-selected'
        }
      }
      return(
        <button 
        key = {nanoid()}
        id = {id}
        className = {answer === props.q.selected ? 'answer selected' : 'answer'}
        onClick = {() => handleClick(answer)}
        >
        {decode(answer)}
        </button>
      )
    })
    
    return (
      <div className='quiz-container'> 
          <h3 className='quiz--title'>
            {decode(props.q.question)}
          </h3>
          {answersElement}
          <hr />
      </div>
    )
  }
