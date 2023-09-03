"use client"

import React, { useState } from 'react'
import { render } from 'react-dom'

const page = () => {

  const [title,settitle] = useState("")
  const [decs,setdecs] = useState("")
  const [mainTask,setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask , {title , decs}])
    setdecs("")
    settitle("")
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length>0) {
    renderTask = mainTask.map((t,i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex justify-between mb-5 w-2/3'>
                <h5 className='text-xl font-semibold'>{t.title}</h5>
                <h5 className='text-lg font-medium'>{t.decs}</h5>
          </div>
          <button className='bg-red-400 text-white px-4 py-2 rounded font-bold' onClick={()=>{
            deleteHandler(i)
          }} >Delete</button>
        </li>
      )
    })
  }

  return (
    <>

      <h1 className='bg-black text-white p-5 text-5xl text-center'>Azaz's TodoList</h1>

      <form action="" onSubmit={submitHandler}>

        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 pl' placeholder='Enter Title here' 
        value={title} 
        onChange={(e) => {
          settitle(e.target.value)
        }} />

        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 pl' placeholder='Enter Description here'
          value={decs}
          onChange={(e) => {
            setdecs(e.target.value)
          }}        
        />

        <button className='bg-black  text-white px-4 py-2 rounded font-bold m-5 text-2xl'>Add Task</button>
      </form>

      <hr />
      <div className='p-8 bg-slate-200' >
        <ul>
          {renderTask}
        </ul>
      </div>

    </>
  )
}

export default page
