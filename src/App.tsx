import './App.css';
import topBlobs from './assets/top_blobs.png';
import bottomBlobs from './assets/bottom_blobs.png';
import { useEffect, useState } from 'react';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';

type Question = {
  "type"?: string,
  "difficulty"?: string,
  "category"?: string,
  "question": string,
  "correct_answer": string,
  "incorrect_answers": string[]
  }

function App() {
  const [isStart, setIsStart] = useState(true)
  const [allQuestions, setAllQuestions] = useState<Question[]>([])
  
  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5")
    .then(res => res.json())
    .then(data => setAllQuestions(data.results))
  },[])

  console.log(allQuestions)
  const Questions = allQuestions.map((item:Question, index:number) => 
    <Quiz 
      key= {index} 
      title={item.question} 
      correct_answer={item.correct_answer}
      incorrect_answers={item.incorrect_answers}/>
  )
  
  return (
    <main>
      <div className="container">
        <img className="top--image" src={topBlobs} alt="Top blobs"/>
        <img className="bottom--image" src={bottomBlobs} alt="Bottom blobs"/>
        <div className='questions'>
          {isStart 
          ? <StartScreen isStart={isStart} setIsStart={setIsStart}/>
          : Questions }
          {!isStart && <button className='check--button'>Check answers</button>}
        </div>
      </div>
    </main>
  );
}

export default App;
