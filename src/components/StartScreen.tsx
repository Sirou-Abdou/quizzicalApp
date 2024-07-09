import React from 'react'

export default function StartScreen(props:{
  start() : void
}) {
  return (
    <div className='start'>
        <h1 className='start--title'>Quizzical</h1>
        <p className='start--description'>Some description if needed</p>
        <button
          className='start--button'
          onClick={()=>props.start()}
        >
        Start Quizzical</button>
    </div>
  )
}
