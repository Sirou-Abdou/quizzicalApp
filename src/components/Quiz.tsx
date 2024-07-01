import React from 'react'

export default function Quiz() {
  return (
    <div className='quiz'>
        <h3 className='quiz--question'>
            How would one say goodbye in Spanish?
        </h3>
        <div className='quiz--answers'>
            <div className='answer'>Adiòs</div>
            <div className='answer'>Hola</div>
            <div className='answer'>Au Revoir</div>
            <div className='answer'>Salir</div>
        </div>
        <hr />
    </div>
  )
}
