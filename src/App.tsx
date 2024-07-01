import './App.css';
import topBlobs from './assets/top_blobs.png';
import bottomBlobs from './assets/bottom_blobs.png';
import { useEffect, useState } from 'react';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';

function App() {
  const [isStart, setIsStart] = useState(false)
    
  return (
    <main>
      <div className="container">
        <img className="top--image" src={topBlobs} alt="Top blobs"/>
        <img className="bottom--image" src={bottomBlobs} alt="Bottom blobs"/>
        {isStart 
        ? <StartScreen /> 
        : 
        <div className='questions'>
          <Quiz />
          <Quiz />
          <Quiz />
          <Quiz />
          <Quiz />
          <button className='check--buttom'>Check answers</button>
        </div>}
      </div>
    </main>
  );
}

export default App;
