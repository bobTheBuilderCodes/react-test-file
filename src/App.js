import './App.css';
import {useState} from 'react'
import { useRef } from 'react/cjs/react.development';


function App() {  
  const [text, setText] = useState("")
  const inputValue = useRef()
  const [disabled, setDisabled] = useState(false)

  const handleChange = e =>{
    setText(e.target.value)
  }
  
  const submit = () =>{
    console.log(inputValue.current.value)
    setDisabled(!text)
  }
  return (
    <div className="App">
      <input ref={inputValue} value={text} onChange={handleChange} name="name" id="name" />
      <button disabled={disabled} onClick={submit}>Click Me</button>
    </div>
  );
}

export default App;
