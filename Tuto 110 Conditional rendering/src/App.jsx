import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)
  const [Todos, setTodos] = useState([
    { title: "Todo 1", desc: "This is the first todo" },
    { title: "Todo 2", desc: "This is the second todo" },
    { title: "Todo 3", desc: "This is the third todo" }
  ])


  // const Todo = (Todo) => {
  //   return (
  //     <>
  //       <div className="m-4 border-1 border-purple-400 rounded-sm">
  //         <div className="todo">
  //         {Todo.title}
  //       </div>
  //       <div className="todo">
  //         {Todo.desc}
  //       </div>
  //       </div>
  //     </>
  //   )
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>count is odd</button> : <button>count is Even</button>}
      {/* {showbtn && <button>I will be shown when second button is clicked</button> } */}
      {Todos.map(todo => {
        // return <Todo key={todo.title} title={todo.title} desc={todo.desc} />

        return <div key={todo.title} className="m-4 border-1 border-purple-400 rounded-sm">
          <div className="todo">
            {todo.title}
          </div>
          <div className="todo">
            {todo.desc}
          </div>
        </div>
      })}

      <div className="card">
        <button onClick={() => { setCount((count) => count + 1); setShowbtn(!showbtn) }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
