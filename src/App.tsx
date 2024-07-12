import './App.css';
import topBlobs from './assets/top_blobs.png';
import bottomBlobs from './assets/bottom_blobs.png';
import { useEffect, useState } from 'react';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import { nanoid } from 'nanoid'

type Question = {
  "type"?: string,
  "difficulty"?: string,
  "category"?: string,
  "question": string,
  "correct_answer": string,
  "incorrect_answers": string[]
  }
export type q = {
  id: string, 
  answers: string[],
  question: string, 
  correct:string, 
  selected: string|null, 
  checked: boolean
  }

function App() {
  const [started, setStarted] = useState(false)
  const [count, setCount] = useState(0)
  const [questions, setQuestions] = useState<q[]>([])
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(0)

  function shuffleArray(arr:string[]) {
    return(
    arr.sort(() => Math.random() - 0.5))
  }
  
  // Get data
  useEffect(() => {
    async function getQuestion() {
      const res = await fetch("https://opentdb.com/api.php?amount=5")
      const data = await res.json()
      let q:q[] = []
      data.results.forEach((question:Question) => {
        q.push({id: nanoid(), answers: shuffleArray([...question.incorrect_answers, question.correct_answer]), question: question.question, correct:question.correct_answer, selected: null, checked: false})
      })
      setQuestions(q)
    }
    getQuestion()
  },[count])

  // Functions
  function handleClickAnswer(id:string, answer:string){
    setQuestions(questions => questions.map(question => {
      return question.id === id ? {...question, selected : answer} : question
    }))
  }

  function start() {
    setStarted(oldState => !oldState)
  }

  function handlePlayAgain() {
    setCount(count => count + 1)
    setChecked(false)
  }

  function handleCheck() {
    let selected = true
    questions.forEach(question =>{
      if(question.selected === null){
        selected = false
        return
      }
    })
    if (!selected){
      return
    }
    setQuestions(questions => questions.map(question => {
      return {...question, checked:true}
    }))
    setChecked(true)
    let correct = 0
    questions.forEach(question => {
      if(question.correct === question.selected){
        correct += 1
      }
    })
    setCorrect(correct)
  }
  
  const questionElement = questions ? questions.map((item:q) =>{
    return(
      <Quiz 
        key= {item.id}
        q={item}
        handleClickAnswer={handleClickAnswer}
        id={item.id}
        />
    )}) : []

  return (
    <main>
      <div className="main--container">
          <div className="blob1">
            <img src={topBlobs} alt="Top blobs"/>
          </div>
          <div className="blob2">
            <img src={bottomBlobs} alt="Top blobs"/>
          </div>
        <div className='content-container'>
          {started ?
          <div className='start-content-container'>
            {questionElement}
            <div className='end-div'>
              {checked && <span className='score'>You scored {correct}/5 correct answers</span>}
              <button className='check' onClick={checked ? handlePlayAgain : handleCheck}>{checked ? 'Play Again' : 'Check Answers'}</button>
            </div>
          </div>
        :
        <StartScreen start = {start} />  
        }
        </div>
      </div>
    </main>
  );
}

export default App;
