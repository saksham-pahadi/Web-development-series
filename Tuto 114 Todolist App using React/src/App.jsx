import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [save, setSave] = useState("Add")
  const [showFinished, setshowFinished] = useState(false)




  useEffect(() => {
    let todoString = JSON.parse(localStorage.getItem("todos"))
    if (todoString) {

      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }

  }, [])








  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }


  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }


  const handleEdit = (e, id) => {
    console.log(id)
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
    setSave("Save");
    handleDelete(e, id);
    saveToLS()


  }
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });

    setTodos(newTodos)
    console.log("Todo deleted");
    saveToLS()

  }
  const handleAdd = () => {


    todo != "" ? setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]) : alert("Todo can't be blank !");
    setTodo("")
    setSave("Add");
    saveToLS()

    console.log(todos)


  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {

    let id = e.target.name;
    console.log(id)
    let index = todos.findIndex(item => {

      return item.id === id;
    })
    let newTodos = [...todos]
    todos[index].isCompleted = !todos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()


  }

  return (
    <>
      <Navbar />
      <div className="container  mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[83vh] w-[95vw]">
        <h1 className='font-bold text-center text-lg'>iTask - Manage your todos at one place</h1>
        <hr />

        <div className="addTodo w-1/1 ">
          <h2 className='text-lg font-bold mt-5'>Add a Todo</h2>
          <div className='flex justify-between items-center'>
            <input onChange={handleChange} value={todo} type="text" className='w-4/5 p-1 px-2 h-10 bg-white text-black rounded-lg' placeholder='Create a new todo' />
            <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950  h-10 text-white rounded-md ml-1  text-sm font-bold w-1/5'>{save}</button>
          </div>
        </div>

        <div className='flex gap-1 my-2'>
          <input onChange={toggleFinished} type="checkbox" value={showFinished} checked={showFinished} name="" id="" /><p>Show finished</p>
        </div>

        <hr />
        <h2 className='text-xl font-bold mt-5'>Your Todos</h2>


        <div className="todos w-[90vw] m-auto">

          {todos.length === 0 && <div className='my-2 text-xl text-indigo-600 font-bold '>No Todos to display</div>}
          {todos.map(item => {


            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between my-3 w-100/100 ">
              <div className="flex gap-2">
                <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} checked={item.isCompleted} name={item.id} id={item.value} />
                <div className={item.isCompleted ? "line-through w-94/100" : " w-90/100"}>

                  <p>{item.todo}</p>
                </div>
              </div>
              <div className="btns flex items-center ">
                <button onClick={(e) => { handleEdit(e, item.id) }} name={item.id} className='bg-violet-800 h-6 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1 text-sm font-bold'><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} name={item.id} className='bg-violet-800 h-6 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1 text-sm font-bold'><AiFillDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
