import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddMovie({movies,setMovies})
{
  const [name,setName]=useState("")
  const [pic,setPic]=useState("")
  const navigate=useNavigate()

  const add=()=>{
      setMovies([...movies,{movieName:name,pic:pic}])
      navigate("/movies")
  }
  return(
    <div className='addmovie-form'>
      <input type="text" placeholder='MovieName' onChange={e=>setName(e.target.value)} />
      <input type="text" placeholder='Movie Picture' onChange={e=>setPic(e.target.value)}/>
      <button onClick={add}>AddMovie</button>
    </div>
  )
}


export default AddMovie