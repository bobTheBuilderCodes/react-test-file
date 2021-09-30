import React from 'react'
import { useTypewriter} from 'react-simple-typewriter'

const AutoWriteText = () => {
  let autoWrite = {
    words: ['You are warmly welcome to my website.', 'My name is Bob The Builder. A Front-end Engineer.', 'I attribute my success to this: I never gave or took any excuse.', 'Best regards...Robert Sam. I love your beautiful face.'],
    loop: 0,
    deleteSpeed: 5
  }

  const {text} = useTypewriter(autoWrite)

  return (
    <div className='background-image-container'>
      <h3>
           {text}
      </h3>
    </div>
  )
}

export default AutoWriteText