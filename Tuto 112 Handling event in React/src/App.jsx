import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("Hey i am clicked");
  }

  const handleOver = () => {
    // alert("Hey i am Over");
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form);
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <div className="red" onMouseOver={handleOver}>
        I am a red div.
      </div>
      <input className='m-1' type='em' placeholder='Email' name='email' value={form.email ? form.email : ""} onChange={handleChange} />
      <input className='m-1' type="text" placeholder='Phone' name='phone' value={form.phone ? form.phone : ""} onChange={handleChange} />



    </>
  )
}

export default App
