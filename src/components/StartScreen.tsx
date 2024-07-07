import React from 'react'

export default function StartScreen(props:{
  isStart : boolean;
  setIsStart:React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className='start'>
        <h1 className='start--title'>Quizzical</h1>
        <p className='start--description'>Some description if needed</p>
        <button
          className='start--button'
          onClick={()=>props.setIsStart(!props.isStart)}
        >
        Start quiz</button>
    </div>
  )
}
