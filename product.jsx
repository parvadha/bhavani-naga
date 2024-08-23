import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieList({movies,setMovies}) {
    const {id}=useParams()
      return (
    <div className='movie-list'>
        {
          movies.map(movie=><Movie movie={movie}/>)
        }

    </div>
  )
}
function Movie({movie})
{
  return(
    <div className='movie-container'>
        <img src={movie.pic} alt="" className='movie-poster'/>
        <div className='movie-spec'>
          <h2 className='movie-name'>{movie.movieName}</h2>
        </div>
    </div>
  )
}

export default MovieList